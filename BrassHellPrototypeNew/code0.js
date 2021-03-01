gdjs.Start_32SceneCode = {};
gdjs.Start_32SceneCode.GDControlsObjects1= [];
gdjs.Start_32SceneCode.GDControlsObjects2= [];
gdjs.Start_32SceneCode.GDBackgroundObjects1= [];
gdjs.Start_32SceneCode.GDBackgroundObjects2= [];
gdjs.Start_32SceneCode.GDStartButtonObjects1= [];
gdjs.Start_32SceneCode.GDStartButtonObjects2= [];
gdjs.Start_32SceneCode.GDStartButtonTextObjects1= [];
gdjs.Start_32SceneCode.GDStartButtonTextObjects2= [];
gdjs.Start_32SceneCode.GDNewObjectObjects1= [];
gdjs.Start_32SceneCode.GDNewObjectObjects2= [];

gdjs.Start_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Start_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32SceneCode.condition2IsTrue_0 = {val:false};


gdjs.Start_32SceneCode.mapOfGDgdjs_46Start_9532SceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_32SceneCode.GDStartButtonObjects1});gdjs.Start_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32SceneCode.GDStartButtonObjects1);

gdjs.Start_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Start_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32SceneCode.mapOfGDgdjs_46Start_9532SceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32SceneCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Start_32SceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


gdjs.Start_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Start_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.Start_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32SceneCode.GDControlsObjects1.length = 0;
gdjs.Start_32SceneCode.GDControlsObjects2.length = 0;
gdjs.Start_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32SceneCode.GDStartButtonObjects1.length = 0;
gdjs.Start_32SceneCode.GDStartButtonObjects2.length = 0;
gdjs.Start_32SceneCode.GDStartButtonTextObjects1.length = 0;
gdjs.Start_32SceneCode.GDStartButtonTextObjects2.length = 0;
gdjs.Start_32SceneCode.GDNewObjectObjects1.length = 0;
gdjs.Start_32SceneCode.GDNewObjectObjects2.length = 0;

gdjs.Start_32SceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_32SceneCode'] = gdjs.Start_32SceneCode;
