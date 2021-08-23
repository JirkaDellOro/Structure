/// <reference types="../../Fudge/Core/FudgeCore" />
declare namespace Script {
    import ƒ = FudgeCore;
    class CustomComponentScript extends ƒ.ComponentScript {
        #private;
        static readonly iSubclass: number;
        prefix: string;
        count: number;
        constructor();
        hndTimer: (_event: ƒ.EventTimer) => void;
        hndAddComponent: (_event: Event) => void;
        hndRemoveComponent: (_event: Event) => void;
    }
}
