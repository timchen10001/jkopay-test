## 文件說明

1, Design 目錄是設計圖
2, Assets 是素材

## 製作說明

1, 請在 https://codesandbox.io/ 新增一個 React 專案。
2, 利用 Assets 中的素材，製作 Design 目錄中的設計圖。
3, 可以使用除了 UI lib 以外的 npm 套件。

## 情境/需求

1, 設計師只提供手機的設計圖，但網頁也需要正常顯示。
2, 設計中的 Accout type 會可能修改成三個頭像或四個頭像。
3, 設計中的全部元件都有可能會在其他專案再次使用。
4, 密碼檢查：密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複。

## 驗證密碼說明

username: abc12345
password: xxabc123wer
結果：不通過

username: abc12345
password: c12345er12fda
結果：不通過

username: abc12345
password: c124345ksfh
結果：通過
