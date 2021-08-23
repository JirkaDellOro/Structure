"use strict";
var Script;
(function (Script) {
    var ƒ = FudgeCore;
    ƒ.Project.registerScriptNamespace(Script);
    class CustomComponentScript extends ƒ.ComponentScript {
        constructor() {
            super();
            this.prefix = "Script: ";
            this.count = 0;
            this.hndTimer = (_event) => {
                console.log(this.prefix + this.count++);
            };
            this.hndAddComponent = (_event) => {
                this.#timer = new ƒ.Timer(ƒ.Time.game, 1000, 0, this.hndTimer);
            };
            this.hndRemoveComponent = (_event) => {
                this.#timer.clear();
                this.removeEventListener("componentAdd" /* COMPONENT_ADD */, this.hndAddComponent);
                this.removeEventListener("componentRemove" /* COMPONENT_REMOVE */, this.hndRemoveComponent);
            };
            if (ƒ.Project.mode == ƒ.MODE.EDITOR)
                return;
            this.addEventListener("componentAdd" /* COMPONENT_ADD */, this.hndAddComponent);
            this.addEventListener("componentRemove" /* COMPONENT_REMOVE */, this.hndRemoveComponent);
        }
        #timer;
    }
    CustomComponentScript.iSubclass = ƒ.Component.registerSubclass(CustomComponentScript);
    Script.CustomComponentScript = CustomComponentScript;
})(Script || (Script = {}));
//# sourceMappingURL=Script.js.map