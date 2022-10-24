enum IndexAxis {
    x,
    y
}
export interface ILineOptionsProps<object> {
    indexAxis?: keyof typeof IndexAxis;
    maintainAspectRatio?: string;
    aspectRatio?: number;
    plugins?: {
        legend: {
            labels: {
                color: string;
            };
        };
    };
    scales?: {
        x: {
            ticks: {
                color: string;
            };
            grid: {
                color: string;
            };
        };
        y?: {
            ticks: {
                color: string;
            };
            grid: {
                color: string;
            };
        };
    };
}

// Bivariance hack for consistent unsoundness with RefObject
type RefCallback<T> = { bivarianceHack(instance: T | null): void }['bivarianceHack'];
type Ref<T> = RefCallback<T> | RefObject<T> | null;
export type IMenuRef = string | Ref<T>;
