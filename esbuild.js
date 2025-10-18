
// code from https://qiita.com/mistylady/items/451c75186412d12fa203
import esbuild from "esbuild";
import { GasPlugin } from "esbuild-gas-plugin";

esbuild
    .build({
        entryPoints: ["./src/main.ts"],
        bundle: true,
        minify: true,
        outfile: "./dist/main.js",
        plugins: [GasPlugin],
        footer: {
            js: "function ReplyEmail(){}", // Google Apps Scriptの制約回避のため関数を追加
        },
    })
    .catch((error) => {
        console.log('ビルドに失敗しました')
        console.error(error);
        process.exit(1);
    });
