<p align="center">
<img width=100 src="https://github.com/abielzulio/chatgpt-raycast/blob/main/assets/icon@dark.png?raw=true">
</p>

<h1 align="center">ChatGPT</h1>

<h3 align="center">
Interact with OpenAI's ChatGPT right from your command bar
</h3>

<p align="center">
(This extension is under Raycast's review (https://github.com/raycast/extensions/pull/5253))
</p>

![Conversation View](metadata/1.png)

# Features

### Ask anything, from your favourite thing

Straight from your command bar, ask anything that you wanted and get an AI-generated answer without any effort.

![Ask anything](metadata/2.png)

### Personalized for you, really

Customize the model to your liking. Create and edit custom engines beyond your creativity.

![Custom model](metadata/3.png)

### Keep continue, with you

Continue talking about everything right where you left off. Be pro without from zero.

![Initial set-up](metadata/7.png)

### Save the answer, for later

Got the answer that you wanted? Great. Now you can save it without asking again.

![Saving the answer](metadata/4.png)

### Look-up your past, fast

Automatically save all the question and answer so you can go back digging for the answer you're looking, quickly.

![Looking through the question history](metadata/5.png)

# How to use

This package requires a valid `Secret Key` from [OpenAI](https://platform.openai.com/account/api-keys).

![Initial set-up](metadata/6.png)

> All the preferences value will be stored locally using [Preferences API](https://developers.raycast.com/api-reference/preferences)

# Preferences

All preferences properties list that can be customize through `Raycast Settings > Extensions > ChatGPT`

| Properties        | Label               | Value                               | Required | Default | Description                                                                                                      |
| ----------------- | ------------------- | ----------------------------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `api`             | API                 | `string`                            | `true`   | `empty` | Your personal Open AI API key                                                                                    |
| `isAutoLoad`      | Auto-load           | `boolean`                           | `false`  | `false` | Load selected text from your frontmost application to the `question bar` or `full text input form` automatically |
| `isAutoFullInput` | Use Full Text Input | `boolean`                           | `false`  | `false` | Switch to `full text input form` from `question bar` automatically whenever you want to ask or type a question   |
| `isAutoTTS`       | Text-to-Speech      | `boolean`                           | `false`  | `false` | Enable auto text-to-speech everytime you get a generated answer                                                  |
| `useProxy`        | Use Proxy           | `boolean`                           | `false`  | `false` | Each question request will be passed through the proxy                                                           |
| `proxyProtocol`   | Proxy Protocol      | `http`, `https`, `socks4`, `socks5` | `false`  | `http`  | Proxy protocol option                                                                                            |
| `proxyHost`       | Proxy Host          | `string`                            | `false`  | `empty` | Proxy host value                                                                                                 |
| `proxyUsername`   | Proxy Username      | `string`                            | `false`  | `empty` | Proxy username value                                                                                             |
| `proxyPassword`   | Proxy Password      | `string`                            | `false`  | `empty` | Proxy password value                                                                                             |

---

<p align="right">
Made with ♥ from Indonesia
</p>
