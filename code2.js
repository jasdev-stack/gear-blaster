gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDNewSpriteObjects1= [];
gdjs.GameOverCode.GDNewSpriteObjects2= [];
gdjs.GameOverCode.GDNewSprite2Objects1= [];
gdjs.GameOverCode.GDNewSprite2Objects2= [];
gdjs.GameOverCode.GDGameOverTextObjects1= [];
gdjs.GameOverCode.GDGameOverTextObjects2= [];
gdjs.GameOverCode.GDYourScoreTextObjects1= [];
gdjs.GameOverCode.GDYourScoreTextObjects2= [];
gdjs.GameOverCode.GDExitTextObjects1= [];
gdjs.GameOverCode.GDExitTextObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.GameOverCode.GDExitTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("YourScoreText"), gdjs.GameOverCode.GDYourScoreTextObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "freesound_community-game-over-38511.mp3", false, 60, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowExitText");
}
{for(var i = 0, len = gdjs.GameOverCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDExitTextObjects1[i].hide();
}
}
{gdjs.evtTools.storage.readNumberFromJSONFile("LastScore", "GearBlaster", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs.GameOverCode.GDYourScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDYourScoreTextObjects1[i].getBehavior("Text").setText("YOUR SCORE : " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowExitText") > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.GameOverCode.GDExitTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDExitTextObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
}

}


{


let isConditionTrue_0 = false;
{
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
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.GameOverCode.GDExitTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDExitTextObjects1[i].getBehavior("Text").setText("");
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
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.GameOverCode.GDExitTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDExitTextObjects1[i].getBehavior("Text").setText("Press 'X' to Exit");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.GameOverCode.GDExitTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDExitTextObjects1[i].showShadow(true);
}
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects2.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDYourScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDYourScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDExitTextObjects1.length = 0;
gdjs.GameOverCode.GDExitTextObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects2.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDYourScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDYourScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDExitTextObjects1.length = 0;
gdjs.GameOverCode.GDExitTextObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
