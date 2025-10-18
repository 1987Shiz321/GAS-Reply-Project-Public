// フォームから取得する申し込みデータを表すインターフェース
export interface ApplicationData {
  email: string;
  participants: string;
  group: string;
  companion: string;
  opportunity: string;
  comment: string;
  dateStr: string;
}