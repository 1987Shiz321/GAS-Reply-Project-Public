# GAS Reply System

## 概要

Google Apps Scriptで動作する返信システムです。

## 前提条件

このプロジェクトを使用するには、以下のツールがインストールされている必要があります。

*   [Node.js](https://nodejs.org/) (npmも同時にインストールされます)
*   [google/clasp](https://github.com/google/clasp)

`clasp`がインストールされていない場合は、以下のコマンドでグローバルにインストールしてください。

```sh
npm install -g @google/clasp
```

また、`clasp`でGoogleアカウントへのログインが済んでいない場合は、以下のコマンドでログインしてください。

```sh
clasp login
```

## 環境構築

1.  **リポジトリをクローンします。**

    ```sh
    git clone <このリポジトリのURL>
    cd gas-reply-system
    ```

2.  **依存パッケージをインストールします。**

    プロジェクトのルートディレクトリで以下のコマンドを実行すると、必要なパッケージが`node_modules`にインストールされます。

    ```sh
    npm install
    ```

3.  **Google Apps Scriptプロジェクトの紐付け**

    `clasp`を使い、新規または既存のGoogle Apps Scriptプロジェクトに紐付けます。`.clasp.json`ファイルが既にリポジトリに含まれているため、クローンしたユーザーは通常この手順をスキップできますが、もし自分のプロジェクトに紐付け直す場合は以下を実行します。

    *   **新規プロジェクトの場合:**
        ```sh
        # "My Reply System" の部分を実際のプロジェクト名に変更してください
        clasp create --title "My Reply System" --rootDir ./dist
        ```

    *   **既存プロジェクトの場合:**
        ```sh
        # <script_id> の部分を実際のスクリプトIDに置き換えてください
        clasp clone <script_id> --rootDir ./dist
        ```

4. **`.clasp.json`** の編集
    
    同ファイルに以下のような記述があります。
    ```json
    "scriptId": "ここにスクリプトIDを入力",
    ```
    `ここにスクリプトIDを入力`の部分をスクリプトIDに置き換えます。

5. **Google App Script APIを有効にする**

    https://script.google.com/home/usersettings にアクセスして、`Google Apps Script API`をオンにします。これがないとプッシュができません。

## 使用方法

`package.json`に、開発用のスクリプトが定義されています。

*   **`npm run build`**
    `src`ディレクトリのTypeScriptコードをビルドし、`dist`ディレクトリに出力します。

*   **`npm run push`**
    `dist`ディレクトリのコードをGoogle Apps Scriptプロジェクトにプッシュします。

*   **`npm run open`**
    紐付けられたGoogle Apps Scriptプロジェクトをブラウザで開きます。

*   **`npm run deploy`**
    ビルドとプッシュを連続して実行します。開発時は主にこのコマンドを使用します。
    ```sh
    npm run deploy
    ```
