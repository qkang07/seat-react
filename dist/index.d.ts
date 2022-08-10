/// <reference types="react" />
import type { ISeatComponent } from 'seat-core';
declare type Props = {
    component: ISeatComponent;
    compProps?: Record<string, any>;
    onEmit?: (ev: any) => any;
};
declare const SeatReact: (props: Props) => JSX.Element;
export default SeatReact;
