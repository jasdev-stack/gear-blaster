gdjs.GameSceneCode = {};
gdjs.GameSceneCode.localVariables = [];
gdjs.GameSceneCode.idToCallbackMap = new Map();
gdjs.GameSceneCode.forEachIndex2 = 0;

gdjs.GameSceneCode.forEachObjects2 = [];

gdjs.GameSceneCode.forEachTemporary2 = null;

gdjs.GameSceneCode.forEachTotalCount2 = 0;

gdjs.GameSceneCode.GDGuardianMechSpriteObjects1= [];
gdjs.GameSceneCode.GDGuardianMechSpriteObjects2= [];
gdjs.GameSceneCode.GDNewTiledSpriteObjects1= [];
gdjs.GameSceneCode.GDNewTiledSpriteObjects2= [];
gdjs.GameSceneCode.GDBackgroundSpriteObjects1= [];
gdjs.GameSceneCode.GDBackgroundSpriteObjects2= [];
gdjs.GameSceneCode.GDBulletObjects1= [];
gdjs.GameSceneCode.GDBulletObjects2= [];
gdjs.GameSceneCode.GDCrawlerBotObjects1= [];
gdjs.GameSceneCode.GDCrawlerBotObjects2= [];
gdjs.GameSceneCode.GDDebugTextObjects1= [];
gdjs.GameSceneCode.GDDebugTextObjects2= [];
gdjs.GameSceneCode.GDScoreTextObjects1= [];
gdjs.GameSceneCode.GDScoreTextObjects2= [];
gdjs.GameSceneCode.GDAmmoTextObjects1= [];
gdjs.GameSceneCode.GDAmmoTextObjects2= [];
gdjs.GameSceneCode.GDReloadTextObjects1= [];
gdjs.GameSceneCode.GDReloadTextObjects2= [];
gdjs.GameSceneCode.GDReloadBarBGObjects1= [];
gdjs.GameSceneCode.GDReloadBarBGObjects2= [];
gdjs.GameSceneCode.GDCrosshairObjects1= [];
gdjs.GameSceneCode.GDCrosshairObjects2= [];
gdjs.GameSceneCode.GDHealthtextObjects1= [];
gdjs.GameSceneCode.GDHealthtextObjects2= [];
gdjs.GameSceneCode.GDNewSpriteObjects1= [];
gdjs.GameSceneCode.GDNewSpriteObjects2= [];
gdjs.GameSceneCode.GDCrawlerBotBulletObjects1= [];
gdjs.GameSceneCode.GDCrawlerBotBulletObjects2= [];
gdjs.GameSceneCode.GDZigDroneObjects1= [];
gdjs.GameSceneCode.GDZigDroneObjects2= [];
gdjs.GameSceneCode.GDZigDroneBulletObjects1= [];
gdjs.GameSceneCode.GDZigDroneBulletObjects2= [];
gdjs.GameSceneCode.GDSniperAgentObjects1= [];
gdjs.GameSceneCode.GDSniperAgentObjects2= [];
gdjs.GameSceneCode.GDSniperAgentBulletObjects1= [];
gdjs.GameSceneCode.GDSniperAgentBulletObjects2= [];


gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotObjects1Objects = Hashtable.newFrom({"CrawlerBot": gdjs.GameSceneCode.GDCrawlerBotObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotBulletObjects2Objects = Hashtable.newFrom({"CrawlerBotBullet": gdjs.GameSceneCode.GDCrawlerBotBulletObjects2});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotObjects1Objects = Hashtable.newFrom({"CrawlerBot": gdjs.GameSceneCode.GDCrawlerBotObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects = Hashtable.newFrom({"GuardianMechSprite": gdjs.GameSceneCode.GDGuardianMechSpriteObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotObjects1Objects = Hashtable.newFrom({"CrawlerBot": gdjs.GameSceneCode.GDCrawlerBotObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotBulletObjects1Objects = Hashtable.newFrom({"CrawlerBotBullet": gdjs.GameSceneCode.GDCrawlerBotBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotBulletObjects1Objects = Hashtable.newFrom({"CrawlerBotBullet": gdjs.GameSceneCode.GDCrawlerBotBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects = Hashtable.newFrom({"GuardianMechSprite": gdjs.GameSceneCode.GDGuardianMechSpriteObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneObjects1Objects = Hashtable.newFrom({"ZigDrone": gdjs.GameSceneCode.GDZigDroneObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneBulletObjects1Objects = Hashtable.newFrom({"ZigDroneBullet": gdjs.GameSceneCode.GDZigDroneBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneObjects1Objects = Hashtable.newFrom({"ZigDrone": gdjs.GameSceneCode.GDZigDroneObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneBulletObjects1Objects = Hashtable.newFrom({"ZigDroneBullet": gdjs.GameSceneCode.GDZigDroneBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneBulletObjects1Objects = Hashtable.newFrom({"ZigDroneBullet": gdjs.GameSceneCode.GDZigDroneBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects = Hashtable.newFrom({"GuardianMechSprite": gdjs.GameSceneCode.GDGuardianMechSpriteObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneObjects1Objects = Hashtable.newFrom({"ZigDrone": gdjs.GameSceneCode.GDZigDroneObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects = Hashtable.newFrom({"GuardianMechSprite": gdjs.GameSceneCode.GDGuardianMechSpriteObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentObjects1Objects = Hashtable.newFrom({"SniperAgent": gdjs.GameSceneCode.GDSniperAgentObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentObjects1Objects = Hashtable.newFrom({"SniperAgent": gdjs.GameSceneCode.GDSniperAgentObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentBulletObjects2Objects = Hashtable.newFrom({"SniperAgentBullet": gdjs.GameSceneCode.GDSniperAgentBulletObjects2});
gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentBulletObjects1Objects = Hashtable.newFrom({"SniperAgentBullet": gdjs.GameSceneCode.GDSniperAgentBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentBulletObjects1Objects = Hashtable.newFrom({"SniperAgentBullet": gdjs.GameSceneCode.GDSniperAgentBulletObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects = Hashtable.newFrom({"GuardianMechSprite": gdjs.GameSceneCode.GDGuardianMechSpriteObjects1});
gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

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
{
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameSceneCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].setY(560);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrosshairObjects1[i].setY(300);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[k] = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space"));
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
gdjs.GameSceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("FireBullet").Fire((gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getPointX("")) + 17, (gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getPointY("")) + 15, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, 270, 500, null);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Animation").setAnimationName("Walking + Firing Animation");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "47313572-sci-fi-sfx-11-350835.mp3", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[k] = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space"));
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
gdjs.GameSceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("FireBullet").Fire((gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getPointX("")) + 17, (gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getPointY("")) + 15, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, 270, 500, null);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Animation").setAnimationName("Walking + Firing Animation");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "47313572-sci-fi-sfx-11-350835.mp3", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[k] = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
gdjs.GameSceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("FireBullet").Fire((gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getPointX("")) + 17, (gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getPointY("")) + 15, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, 270, 500, null);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Animation").setAnimationName("Idle + Firing Animation");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "47313572-sci-fi-sfx-11-350835.mp3", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[k] = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
gdjs.GameSceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("FireBullet").Fire((gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getPointX("")) + 17, (gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getPointY("")) + 15, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, 270, 500, null);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Animation").setAnimationName("Idle + Firing Animation");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "47313572-sci-fi-sfx-11-350835.mp3", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[k] = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Animation").setAnimationName("Walking Animaton");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[k] = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Animation").setAnimationName("Idle Animation");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameSceneCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getX() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[k] = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCrosshairObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCrosshairObjects1[i].getX() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCrosshairObjects1[k] = gdjs.GameSceneCode.GDCrosshairObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCrosshairObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCrosshairObjects1 */
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrosshairObjects1[i].setX(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameSceneCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getX() > 310 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[k] = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCrosshairObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCrosshairObjects1[i].getX() > 310 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCrosshairObjects1[k] = gdjs.GameSceneCode.GDCrosshairObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCrosshairObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCrosshairObjects1 */
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].setX(310);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrosshairObjects1[i].setX(320);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnTimer") > 3;
if (isConditionTrue_0) {
gdjs.GameSceneCode.GDCrawlerBotObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotObjects1Objects, gdjs.randomInRange(0, 310), -(50), "");
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotObjects1[i].addForce(0, 50, 1);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotObjects1[i].resetTimer("CrawlerShootTimer");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrawlerBot"), gdjs.GameSceneCode.GDCrawlerBotObjects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDCrawlerBotObjects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.GameSceneCode.GDCrawlerBotBulletObjects2.length = 0;

gdjs.GameSceneCode.GDCrawlerBotObjects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDCrawlerBotObjects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDCrawlerBotObjects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCrawlerBotObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCrawlerBotObjects2[i].getTimerElapsedTimeInSecondsOrNaN("CrawlerShootTimer") > 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCrawlerBotObjects2[k] = gdjs.GameSceneCode.GDCrawlerBotObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCrawlerBotObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10410972);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotBulletObjects2Objects, (( gdjs.GameSceneCode.GDCrawlerBotObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCrawlerBotObjects2[0].getPointX("")) + 17, (( gdjs.GameSceneCode.GDCrawlerBotObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCrawlerBotObjects2[0].getPointY("")) + 15, "");
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotBulletObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotBulletObjects2[i].addForce(0, 100, 1);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotObjects2[i].resetTimer("CrawlerShootTimer");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrawlerBot"), gdjs.GameSceneCode.GDCrawlerBotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCrawlerBotObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCrawlerBotObjects1[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCrawlerBotObjects1[k] = gdjs.GameSceneCode.GDCrawlerBotObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCrawlerBotObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCrawlerBotObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("CrawlerBot"), gdjs.GameSceneCode.GDCrawlerBotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBulletObjects1 */
/* Reuse gdjs.GameSceneCode.GDCrawlerBotObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dogwolf123-retro-explode-sound-05-474811.mp3", false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameSceneCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDScoreTextObjects1[i].getBehavior("Text").setText("SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11436252);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "daviddumaisaudio-gun-technology-designed-sci-fi-reload-09-316415 (1).mp3", false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(60);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 60);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12394180);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "daviddumaisaudio-gun-technology-designed-sci-fi-reload-09-316415 (1).mp3", false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AmmoText"), gdjs.GameSceneCode.GDAmmoTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAmmoTextObjects1[i].getBehavior("Text").setText("ENERGY x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameSceneCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReloadText"), gdjs.GameSceneCode.GDReloadTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDReloadTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDReloadTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrosshairObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameSceneCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReloadText"), gdjs.GameSceneCode.GDReloadTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDReloadTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDReloadTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrosshairObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrawlerBot"), gdjs.GameSceneCode.GDCrawlerBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCrawlerBotObjects1 */
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1.5);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "edr-video-game-hit-noise-001-135821.mp3", false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("GearBlaster", "LastScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Healthtext"), gdjs.GameSceneCode.GDHealthtextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDHealthtextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHealthtextObjects1[i].getBehavior("Text").setText("ARMOR : " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Battle Improved.mp3", true, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)) + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() >= 0.4);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) + 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() > 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReloadText"), gdjs.GameSceneCode.GDReloadTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDReloadTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDReloadTextObjects1[i].getBehavior("Text").setText("Recharging");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReloadText"), gdjs.GameSceneCode.GDReloadTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDReloadTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDReloadTextObjects1[i].getBehavior("Text").setText("Recharging.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReloadText"), gdjs.GameSceneCode.GDReloadTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDReloadTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDReloadTextObjects1[i].getBehavior("Text").setText("Recharging..");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReloadText"), gdjs.GameSceneCode.GDReloadTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDReloadTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDReloadTextObjects1[i].getBehavior("Text").setText("Recharging...");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AmmoText"), gdjs.GameSceneCode.GDAmmoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Healthtext"), gdjs.GameSceneCode.GDHealthtextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameSceneCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAmmoTextObjects1[i].setOutlineEnabled(true);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDHealthtextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHealthtextObjects1[i].setOutlineEnabled(true);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAmmoTextObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDScoreTextObjects1[i].setOutlineEnabled(true);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDHealthtextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHealthtextObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDScoreTextObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("CrawlerBotBullet"), gdjs.GameSceneCode.GDCrawlerBotBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBulletObjects1 */
/* Reuse gdjs.GameSceneCode.GDCrawlerBotBulletObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "freesound_community-laser-bolt-89300.mp3", false, 40, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrawlerBotBullet"), gdjs.GameSceneCode.GDCrawlerBotBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCrawlerBotBulletObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCrawlerBotBulletObjects1[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCrawlerBotBulletObjects1[k] = gdjs.GameSceneCode.GDCrawlerBotBulletObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCrawlerBotBulletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCrawlerBotBulletObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrawlerBotBullet"), gdjs.GameSceneCode.GDCrawlerBotBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCrawlerBotBulletObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCrawlerBotBulletObjects1 */
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1.5);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "edr-video-game-hit-noise-001-135821.mp3", false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ZigSpawnTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ZigSpawnTimer") > 10;
if (isConditionTrue_0) {
gdjs.GameSceneCode.GDZigDroneObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneObjects1Objects, gdjs.randomInRange(50, 310), -(50), "");
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].returnVariable(gdjs.GameSceneCode.GDZigDroneObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.GameSceneCode.GDZigDroneObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].resetTimer("ZigShootTimer");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ZigSpawnTimer");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ZigDrone"), gdjs.GameSceneCode.GDZigDroneObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].returnVariable(gdjs.GameSceneCode.GDZigDroneObjects1[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ZigDrone"), gdjs.GameSceneCode.GDZigDroneObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].setY(gdjs.GameSceneCode.GDZigDroneObjects1[i].getY() + (55 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ZigDrone"), gdjs.GameSceneCode.GDZigDroneObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].setX((gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZigDroneObjects1[i].getVariables().getFromIndex(1))) + Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZigDroneObjects1[i].getVariables().getFromIndex(0))) * 2) * 50);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZigDrone"), gdjs.GameSceneCode.GDZigDroneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZigDroneObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZigDroneObjects1[i].getTimerElapsedTimeInSecondsOrNaN("ZigShootTimer") > 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZigDroneObjects1[k] = gdjs.GameSceneCode.GDZigDroneObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZigDroneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZigDroneObjects1 */
gdjs.GameSceneCode.GDZigDroneBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneBulletObjects1Objects, (( gdjs.GameSceneCode.GDZigDroneObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZigDroneObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDZigDroneObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZigDroneObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneBulletObjects1[i].returnVariable(gdjs.GameSceneCode.GDZigDroneBulletObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].resetTimer("ZigShootTimer");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZigDroneBullet"), gdjs.GameSceneCode.GDZigDroneBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZigDroneBulletObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZigDroneBulletObjects1[i].getY() > 700 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZigDroneBulletObjects1[k] = gdjs.GameSceneCode.GDZigDroneBulletObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZigDroneBulletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZigDroneBulletObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ZigDroneBullet"), gdjs.GameSceneCode.GDZigDroneBulletObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneBulletObjects1[i].setY(gdjs.GameSceneCode.GDZigDroneBulletObjects1[i].getY() + (30 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZigDrone"), gdjs.GameSceneCode.GDZigDroneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBulletObjects1 */
/* Reuse gdjs.GameSceneCode.GDZigDroneObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(20);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dogwolf123-retro-explode-sound-05-474811.mp3", false, 30, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZigDroneBullet"), gdjs.GameSceneCode.GDZigDroneBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBulletObjects1 */
/* Reuse gdjs.GameSceneCode.GDZigDroneBulletObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "freesound_community-laser-bolt-89300.mp3", false, 40, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZigDroneBullet"), gdjs.GameSceneCode.GDZigDroneBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneBulletObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
/* Reuse gdjs.GameSceneCode.GDZigDroneBulletObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1.5);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "edr-video-game-hit-noise-001-135821.mp3", false, 30, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZigDrone"), gdjs.GameSceneCode.GDZigDroneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDZigDroneObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
/* Reuse gdjs.GameSceneCode.GDZigDroneObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "edr-video-game-hit-noise-001-135821.mp3", false, 30, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1.5);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Opacity").setOpacity(128);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SniperSpawnTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SniperSpawnTimer") > 5;
if (isConditionTrue_0) {
gdjs.GameSceneCode.GDSniperAgentObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentObjects1Objects, gdjs.randomInRange(0, 310), -(50), "");
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].addForce(0, 50, 1);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SniperSpawnTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SniperAgent"), gdjs.GameSceneCode.GDSniperAgentObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSniperAgentObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSniperAgentObjects1[i].getY() > 50 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSniperAgentObjects1[k] = gdjs.GameSceneCode.GDSniperAgentObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSniperAgentObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSniperAgentObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSniperAgentObjects1[i].getVariableBoolean(gdjs.GameSceneCode.GDSniperAgentObjects1[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSniperAgentObjects1[k] = gdjs.GameSceneCode.GDSniperAgentObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSniperAgentObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDSniperAgentObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].resetTimer("BurstTimer");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].returnVariable(gdjs.GameSceneCode.GDSniperAgentObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].returnVariable(gdjs.GameSceneCode.GDSniperAgentObjects1[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].resetTimer("BurstCooldown");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("SniperAgent"), gdjs.GameSceneCode.GDSniperAgentObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBulletObjects1 */
/* Reuse gdjs.GameSceneCode.GDSniperAgentObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dogwolf123-retro-explode-sound-05-474811.mp3", false, 30, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SniperAgent"), gdjs.GameSceneCode.GDSniperAgentObjects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDSniperAgentObjects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects2);
gdjs.GameSceneCode.GDSniperAgentBulletObjects2.length = 0;

gdjs.GameSceneCode.GDSniperAgentObjects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDSniperAgentObjects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDSniperAgentObjects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSniperAgentObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSniperAgentObjects2[i].getTimerElapsedTimeInSecondsOrNaN("BurstTimer") > 0.2 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSniperAgentObjects2[k] = gdjs.GameSceneCode.GDSniperAgentObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSniperAgentObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSniperAgentObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSniperAgentObjects2[i].getVariableNumber(gdjs.GameSceneCode.GDSniperAgentObjects2[i].getVariables().getFromIndex(0)) < 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSniperAgentObjects2[k] = gdjs.GameSceneCode.GDSniperAgentObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSniperAgentObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSniperAgentObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSniperAgentObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDSniperAgentObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSniperAgentObjects2[k] = gdjs.GameSceneCode.GDSniperAgentObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSniperAgentObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSniperAgentObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSniperAgentObjects2[i].getTimerElapsedTimeInSecondsOrNaN("BurstCooldown") > 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSniperAgentObjects2[k] = gdjs.GameSceneCode.GDSniperAgentObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSniperAgentObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentBulletObjects2Objects, (( gdjs.GameSceneCode.GDSniperAgentObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSniperAgentObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDSniperAgentObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSniperAgentObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentBulletObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentBulletObjects2[i].addForceTowardObject((gdjs.GameSceneCode.GDGuardianMechSpriteObjects2.length !== 0 ? gdjs.GameSceneCode.GDGuardianMechSpriteObjects2[0] : null), 300, 1);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects2[i].returnVariable(gdjs.GameSceneCode.GDSniperAgentObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects2[i].resetTimer("BurstTimer");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects2[i].resetTimer("BurstCooldown");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SniperAgent"), gdjs.GameSceneCode.GDSniperAgentObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSniperAgentObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSniperAgentObjects1[i].getVariableNumber(gdjs.GameSceneCode.GDSniperAgentObjects1[i].getVariables().getFromIndex(0)) >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSniperAgentObjects1[k] = gdjs.GameSceneCode.GDSniperAgentObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSniperAgentObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDSniperAgentObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].returnVariable(gdjs.GameSceneCode.GDSniperAgentObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].resetTimer("BurstCooldown");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CrawlerBot"), gdjs.GameSceneCode.GDCrawlerBotObjects1);
gdjs.copyArray(runtimeScene.getObjects("SniperAgent"), gdjs.GameSceneCode.GDSniperAgentObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZigDrone"), gdjs.GameSceneCode.GDZigDroneObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDZigDroneObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZigDroneObjects1[i].getBehavior("Animation").setAnimationName("IdleAnimation");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentObjects1[i].getBehavior("Animation").setAnimationName("IdleAnimation");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrawlerBotObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrawlerBotObjects1[i].getBehavior("Animation").setAnimationName("IdleAnimation");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("SniperAgentBullet"), gdjs.GameSceneCode.GDSniperAgentBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentBulletObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBulletObjects1 */
/* Reuse gdjs.GameSceneCode.GDSniperAgentBulletObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "freesound_community-laser-bolt-89300.mp3", false, 40, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("SniperAgentBullet"), gdjs.GameSceneCode.GDSniperAgentBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSniperAgentBulletObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGuardianMechSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGuardianMechSpriteObjects1 */
/* Reuse gdjs.GameSceneCode.GDSniperAgentBulletObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSniperAgentBulletObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSniperAgentBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1.5);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("Opacity").setOpacity(128);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "edr-video-game-hit-noise-001-135821.mp3", false, 30, 1);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameSceneCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrosshairObjects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameSceneCode.GDCrosshairObjects1);
gdjs.copyArray(runtimeScene.getObjects("GuardianMechSprite"), gdjs.GameSceneCode.GDGuardianMechSpriteObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGuardianMechSpriteObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrosshairObjects1[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}
}

}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDGuardianMechSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDBackgroundSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDBackgroundSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDBulletObjects1.length = 0;
gdjs.GameSceneCode.GDBulletObjects2.length = 0;
gdjs.GameSceneCode.GDCrawlerBotObjects1.length = 0;
gdjs.GameSceneCode.GDCrawlerBotObjects2.length = 0;
gdjs.GameSceneCode.GDDebugTextObjects1.length = 0;
gdjs.GameSceneCode.GDDebugTextObjects2.length = 0;
gdjs.GameSceneCode.GDScoreTextObjects1.length = 0;
gdjs.GameSceneCode.GDScoreTextObjects2.length = 0;
gdjs.GameSceneCode.GDAmmoTextObjects1.length = 0;
gdjs.GameSceneCode.GDAmmoTextObjects2.length = 0;
gdjs.GameSceneCode.GDReloadTextObjects1.length = 0;
gdjs.GameSceneCode.GDReloadTextObjects2.length = 0;
gdjs.GameSceneCode.GDReloadBarBGObjects1.length = 0;
gdjs.GameSceneCode.GDReloadBarBGObjects2.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects1.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects2.length = 0;
gdjs.GameSceneCode.GDHealthtextObjects1.length = 0;
gdjs.GameSceneCode.GDHealthtextObjects2.length = 0;
gdjs.GameSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDCrawlerBotBulletObjects1.length = 0;
gdjs.GameSceneCode.GDCrawlerBotBulletObjects2.length = 0;
gdjs.GameSceneCode.GDZigDroneObjects1.length = 0;
gdjs.GameSceneCode.GDZigDroneObjects2.length = 0;
gdjs.GameSceneCode.GDZigDroneBulletObjects1.length = 0;
gdjs.GameSceneCode.GDZigDroneBulletObjects2.length = 0;
gdjs.GameSceneCode.GDSniperAgentObjects1.length = 0;
gdjs.GameSceneCode.GDSniperAgentObjects2.length = 0;
gdjs.GameSceneCode.GDSniperAgentBulletObjects1.length = 0;
gdjs.GameSceneCode.GDSniperAgentBulletObjects2.length = 0;

gdjs.GameSceneCode.eventsList2(runtimeScene);
gdjs.GameSceneCode.GDGuardianMechSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDGuardianMechSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDBackgroundSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDBackgroundSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDBulletObjects1.length = 0;
gdjs.GameSceneCode.GDBulletObjects2.length = 0;
gdjs.GameSceneCode.GDCrawlerBotObjects1.length = 0;
gdjs.GameSceneCode.GDCrawlerBotObjects2.length = 0;
gdjs.GameSceneCode.GDDebugTextObjects1.length = 0;
gdjs.GameSceneCode.GDDebugTextObjects2.length = 0;
gdjs.GameSceneCode.GDScoreTextObjects1.length = 0;
gdjs.GameSceneCode.GDScoreTextObjects2.length = 0;
gdjs.GameSceneCode.GDAmmoTextObjects1.length = 0;
gdjs.GameSceneCode.GDAmmoTextObjects2.length = 0;
gdjs.GameSceneCode.GDReloadTextObjects1.length = 0;
gdjs.GameSceneCode.GDReloadTextObjects2.length = 0;
gdjs.GameSceneCode.GDReloadBarBGObjects1.length = 0;
gdjs.GameSceneCode.GDReloadBarBGObjects2.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects1.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects2.length = 0;
gdjs.GameSceneCode.GDHealthtextObjects1.length = 0;
gdjs.GameSceneCode.GDHealthtextObjects2.length = 0;
gdjs.GameSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDCrawlerBotBulletObjects1.length = 0;
gdjs.GameSceneCode.GDCrawlerBotBulletObjects2.length = 0;
gdjs.GameSceneCode.GDZigDroneObjects1.length = 0;
gdjs.GameSceneCode.GDZigDroneObjects2.length = 0;
gdjs.GameSceneCode.GDZigDroneBulletObjects1.length = 0;
gdjs.GameSceneCode.GDZigDroneBulletObjects2.length = 0;
gdjs.GameSceneCode.GDSniperAgentObjects1.length = 0;
gdjs.GameSceneCode.GDSniperAgentObjects2.length = 0;
gdjs.GameSceneCode.GDSniperAgentBulletObjects1.length = 0;
gdjs.GameSceneCode.GDSniperAgentBulletObjects2.length = 0;


return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
