import { ActionPanel, Icon, List, LocalStorage, showToast, Toast } from "@raycast/api";
import { useCallback, useEffect, useState } from "react";
import { CopyToClipboardAction, DestructiveAction, SaveAsSnippetAction, TextToSpeechAction } from "./actions";
import { CopyActionSection } from "./actions/copy";
import { Answer } from "./type";
import { AnswerDetailView } from "./views/answer-detail";

export default function SavedAnswer() {
  const [savedAnswers, setSavedAnswers] = useState<Answer[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const storedSavedAnswers = await LocalStorage.getItem<string>("savedAnswers");

      if (!storedSavedAnswers) {
        setSavedAnswers([]);
      } else {
        const answers: Answer[] = JSON.parse(storedSavedAnswers);
        setSavedAnswers((previous) => [...previous, ...answers]);
      }
    })();
  }, []);

  useEffect(() => {
    LocalStorage.setItem("savedAnswers", JSON.stringify(savedAnswers));
  }, [savedAnswers]);

  const handleUnsaveAnswer = useCallback(
    async (answer: Answer) => {
      const toast = await showToast({
        title: "Unsaving your answer...",
        style: Toast.Style.Animated,
      });
      const newSavedAnswer = savedAnswers.filter((savedAnswer) => savedAnswer.id !== answer.id);
      setSavedAnswers(newSavedAnswer);
      toast.title = "Answer unsaved!";
      toast.style = Toast.Style.Success;
    },
    [setSavedAnswers, savedAnswers]
  );

  const getActionPanel = (answer: Answer) => (
    <ActionPanel>
      <CopyActionSection answer={answer.answer} question={answer.question} />
      <SaveAsSnippetAction text={answer.answer} name={answer.question} />
      <CopyToClipboardAction title="Copy ID" content={answer.id} />
      <CopyToClipboardAction title="Copy Conversation ID" content={answer.conversationId} />
      <TextToSpeechAction content={answer.answer} />
      <DestructiveAction
        title="Remove Answer"
        dialog={{
          title: "Are you sure you want to remove this answer from your collection?",
        }}
        onAction={() => handleUnsaveAnswer(answer)}
      />
    </ActionPanel>
  );

  const filteredAnswers = savedAnswers.filter((answer) => {
    if (searchText === "") {
      return true;
    }
    return (
      answer.question.toLowerCase().includes(searchText.toLowerCase()) ||
      answer.answer.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <List
      isShowingDetail={filteredAnswers.length === 0 ? false : true}
      filtering={false}
      throttle={false}
      navigationTitle={"Saved Answers"}
      selectedItemId={selectedAnswerId || undefined}
      onSelectionChange={(id) => {
        if (id !== selectedAnswerId) {
          setSelectedAnswerId(id);
        }
      }}
      searchBarPlaceholder="Search saved answers/question..."
      searchText={searchText}
      onSearchTextChange={setSearchText}
    >
      {savedAnswers.length === 0 ? (
        <List.EmptyView title="No saved answers" icon={Icon.Stars} />
      ) : (
        <List.Section title="Saved" subtitle={filteredAnswers.length.toLocaleString()}>
          {filteredAnswers
            .sort((a, b) => new Date(b.savedAt ?? 0).getTime() - new Date(a.savedAt ?? 0).getTime())

            .map((answer) => (
              <List.Item
                id={answer.id}
                key={answer.id}
                title={answer.question}
                accessories={[{ text: new Date(answer.createdAt ?? 0).toLocaleDateString() }]}
                detail={<AnswerDetailView answer={answer} />}
                actions={answer && selectedAnswerId === answer.id ? getActionPanel(answer) : undefined}
              />
            ))}
        </List.Section>
      )}
    </List>
  );
}
