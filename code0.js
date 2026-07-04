gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];
gdjs.MainMenuCode.GDNewSprite3Objects1= [];
gdjs.MainMenuCode.GDNewSprite3Objects2= [];
gdjs.MainMenuCode.GDNewSprite4Objects1= [];
gdjs.MainMenuCode.GDNewSprite4Objects2= [];
gdjs.MainMenuCode.GDNewSprite5Objects1= [];
gdjs.MainMenuCode.GDNewSprite5Objects2= [];
gdjs.MainMenuCode.GDStartTextObjects1= [];
gdjs.MainMenuCode.GDStartTextObjects2= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "freesound_community-8bit-music-for-game-68698.mp3", true, 70, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainMenuCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartTextObjects1[i].showShadow(true);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0.7);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainMenuCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartTextObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainMenuCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartTextObjects1[i].getBehavior("Text").setText("Press 'S' to Start");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite5Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite5Objects2.length = 0;
gdjs.MainMenuCode.GDStartTextObjects1.length = 0;
gdjs.MainMenuCode.GDStartTextObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite5Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite5Objects2.length = 0;
gdjs.MainMenuCode.GDStartTextObjects1.length = 0;
gdjs.MainMenuCode.GDStartTextObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
