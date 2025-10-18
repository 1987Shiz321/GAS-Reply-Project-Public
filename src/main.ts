import { ReplyEmail } from "./App.js";

// GASの実行環境から呼び出せるように、グローバルオブジェクトに関数を登録する
(globalThis as any).ReplyEmail = ReplyEmail;
