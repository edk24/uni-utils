/**
 * 打开操作菜单
 *
 * @param options
 * @param callback
 */
export declare function showActionSheet(options: string[], callback: (index: number) => void): void;
/**
 * 打开确认对话框
 *
 * @param title
 * @param content
 * @param confirmText
 * @param cancelText
 * @param callback
 */
export declare function showModal(title: string, content: string, confirmText: string | undefined, cancelText: string | undefined, callback: (confirmed: boolean) => void): void;
