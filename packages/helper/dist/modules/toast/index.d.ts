/**
 * 显示消息提示
 *
 * @param message
 * @param icon
 * @param duration
 * @returns
 */
export declare function showToast(message: string, icon?: 'none' | 'success' | 'error', duration?: number): () => void;
/**
 * 显示成功提示
 *
 * @param message
 * @param duration
 * @returns
 */
export declare function showSuccessToast(message: string, duration?: number): () => void;
/**
 * 显示错误提示
 *
 * @param message
 * @param duration
 * @returns
 */
export declare function showErrorToast(message: string, duration?: number): () => void;
/**
 * 显示加载中提示
 *
 * @param message
 * @returns
 */
export declare function showLoading(message: string): () => void;
