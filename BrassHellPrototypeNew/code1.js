gdjs.Level_321Code = {};
gdjs.Level_321Code.forEachIndex3 = 0;

gdjs.Level_321Code.forEachObjects3 = [];

gdjs.Level_321Code.forEachTemporary3 = null;

gdjs.Level_321Code.forEachTotalCount3 = 0;

gdjs.Level_321Code.stopDoWhile3 = false;

gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDPlayerObjects4= [];
gdjs.Level_321Code.GDPlayerBulletObjects1= [];
gdjs.Level_321Code.GDPlayerBulletObjects2= [];
gdjs.Level_321Code.GDPlayerBulletObjects3= [];
gdjs.Level_321Code.GDPlayerBulletObjects4= [];
gdjs.Level_321Code.GDPauseScreenObjects1= [];
gdjs.Level_321Code.GDPauseScreenObjects2= [];
gdjs.Level_321Code.GDPauseScreenObjects3= [];
gdjs.Level_321Code.GDPauseScreenObjects4= [];
gdjs.Level_321Code.GDEnemy1Objects1= [];
gdjs.Level_321Code.GDEnemy1Objects2= [];
gdjs.Level_321Code.GDEnemy1Objects3= [];
gdjs.Level_321Code.GDEnemy1Objects4= [];
gdjs.Level_321Code.GDBackgroundObjects1= [];
gdjs.Level_321Code.GDBackgroundObjects2= [];
gdjs.Level_321Code.GDBackgroundObjects3= [];
gdjs.Level_321Code.GDBackgroundObjects4= [];
gdjs.Level_321Code.GDEnemy2Objects1= [];
gdjs.Level_321Code.GDEnemy2Objects2= [];
gdjs.Level_321Code.GDEnemy2Objects3= [];
gdjs.Level_321Code.GDEnemy2Objects4= [];
gdjs.Level_321Code.GDEnemy3Objects1= [];
gdjs.Level_321Code.GDEnemy3Objects2= [];
gdjs.Level_321Code.GDEnemy3Objects3= [];
gdjs.Level_321Code.GDEnemy3Objects4= [];
gdjs.Level_321Code.GDHitEffectObjects1= [];
gdjs.Level_321Code.GDHitEffectObjects2= [];
gdjs.Level_321Code.GDHitEffectObjects3= [];
gdjs.Level_321Code.GDHitEffectObjects4= [];
gdjs.Level_321Code.GDOrbiterObjects1= [];
gdjs.Level_321Code.GDOrbiterObjects2= [];
gdjs.Level_321Code.GDOrbiterObjects3= [];
gdjs.Level_321Code.GDOrbiterObjects4= [];
gdjs.Level_321Code.GDBarsObjects1= [];
gdjs.Level_321Code.GDBarsObjects2= [];
gdjs.Level_321Code.GDBarsObjects3= [];
gdjs.Level_321Code.GDBarsObjects4= [];
gdjs.Level_321Code.GDArchmageObjects1= [];
gdjs.Level_321Code.GDArchmageObjects2= [];
gdjs.Level_321Code.GDArchmageObjects3= [];
gdjs.Level_321Code.GDArchmageObjects4= [];
gdjs.Level_321Code.GDEnemyBulletObjects1= [];
gdjs.Level_321Code.GDEnemyBulletObjects2= [];
gdjs.Level_321Code.GDEnemyBulletObjects3= [];
gdjs.Level_321Code.GDEnemyBulletObjects4= [];
gdjs.Level_321Code.GDOnScreenDetectorObjects1= [];
gdjs.Level_321Code.GDOnScreenDetectorObjects2= [];
gdjs.Level_321Code.GDOnScreenDetectorObjects3= [];
gdjs.Level_321Code.GDOnScreenDetectorObjects4= [];
gdjs.Level_321Code.GDExperienceObjects1= [];
gdjs.Level_321Code.GDExperienceObjects2= [];
gdjs.Level_321Code.GDExperienceObjects3= [];
gdjs.Level_321Code.GDExperienceObjects4= [];
gdjs.Level_321Code.GDResetLevelObjects1= [];
gdjs.Level_321Code.GDResetLevelObjects2= [];
gdjs.Level_321Code.GDResetLevelObjects3= [];
gdjs.Level_321Code.GDResetLevelObjects4= [];
gdjs.Level_321Code.GDBossHPObjects1= [];
gdjs.Level_321Code.GDBossHPObjects2= [];
gdjs.Level_321Code.GDBossHPObjects3= [];
gdjs.Level_321Code.GDBossHPObjects4= [];
gdjs.Level_321Code.GDShieldRechargeObjects1= [];
gdjs.Level_321Code.GDShieldRechargeObjects2= [];
gdjs.Level_321Code.GDShieldRechargeObjects3= [];
gdjs.Level_321Code.GDShieldRechargeObjects4= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.condition3IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};
gdjs.Level_321Code.condition3IsTrue_1 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "true";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("tofalse");
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "false";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("true");
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "tofalse";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("false");
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)) >= 400 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(5);
}
}}

}


};gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)) >= 250 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(4);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)) >= 150 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(3);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)) >= 75 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(2);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOrbiterObjects2Objects = Hashtable.newFrom({"Orbiter": gdjs.Level_321Code.GDOrbiterObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOrbiterObjects3Objects = Hashtable.newFrom({"Orbiter": gdjs.Level_321Code.GDOrbiterObjects3});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOrbiterObjects3Objects = Hashtable.newFrom({"Orbiter": gdjs.Level_321Code.GDOrbiterObjects3});gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

};gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Orbiter"), gdjs.Level_321Code.GDOrbiterObjects2);

for(gdjs.Level_321Code.forEachIndex3 = 0;gdjs.Level_321Code.forEachIndex3 < gdjs.Level_321Code.GDOrbiterObjects2.length;++gdjs.Level_321Code.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
gdjs.Level_321Code.GDOrbiterObjects3.length = 0;


gdjs.Level_321Code.forEachTemporary3 = gdjs.Level_321Code.GDOrbiterObjects2[gdjs.Level_321Code.forEachIndex3];
gdjs.Level_321Code.GDOrbiterObjects3.push(gdjs.Level_321Code.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.Level_321Code.GDOrbiterObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDOrbiterObjects3[i].putAroundObject((gdjs.Level_321Code.GDPlayerObjects3.length !== 0 ? gdjs.Level_321Code.GDPlayerObjects3[0] : null), 40, 60 * gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) + ((360 / ((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects3[0].getVariables()).getFromIndex(1))) - 2)) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}
}

}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

};gdjs.Level_321Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Orbiter"), gdjs.Level_321Code.GDOrbiterObjects2);

for(gdjs.Level_321Code.forEachIndex3 = 0;gdjs.Level_321Code.forEachIndex3 < gdjs.Level_321Code.GDOrbiterObjects2.length;++gdjs.Level_321Code.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
gdjs.Level_321Code.GDOrbiterObjects3.length = 0;


gdjs.Level_321Code.forEachTemporary3 = gdjs.Level_321Code.GDOrbiterObjects2[gdjs.Level_321Code.forEachIndex3];
gdjs.Level_321Code.GDOrbiterObjects3.push(gdjs.Level_321Code.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.Level_321Code.GDOrbiterObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDOrbiterObjects3[i].putAroundObject((gdjs.Level_321Code.GDPlayerObjects3.length !== 0 ? gdjs.Level_321Code.GDPlayerObjects3[0] : null), 65, 60 * gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) + ((360 / ((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects3[0].getVariables()).getFromIndex(1))) - 2)) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects2ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects2ObjectsGDgdjs_46Level_95321Code_46GDEnemy3Objects2ObjectsGDgdjs_46Level_95321Code_46GDArchmageObjects2Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects2, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects2, "Enemy3": gdjs.Level_321Code.GDEnemy3Objects2, "Archmage": gdjs.Level_321Code.GDArchmageObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Level_321Code.GDEnemyBulletObjects2});gdjs.Level_321Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects3[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects3[i].getVariables().getFromIndex(4)) == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects3[k] = gdjs.Level_321Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects3.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Health").Hit(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.Level_321Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(4)) == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(4)) == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(4)) == 2 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(4)).setNumber(0);
}
}}

}


};gdjs.Level_321Code.eventsList12 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].addPolarForce(270, (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].addPolarForce(180, (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].addPolarForce(90, (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(250);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(550);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].timerElapsedTime("ShootTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)))) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Level_321Code.condition2IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Level_321Code.GDPlayerBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + 3 + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].resetTimer("ShootTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].timerElapsedTime("ShootTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)))) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == 2 ) {
        gdjs.Level_321Code.condition2IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Level_321Code.GDPlayerBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + 6 + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].resetTimer("ShootTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].timerElapsedTime("ShootTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)))) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == 3 ) {
        gdjs.Level_321Code.condition2IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Orbiter"), gdjs.Level_321Code.GDOrbiterObjects2);
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Level_321Code.GDPlayerBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + 6 + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDOrbiterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOrbiterObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDOrbiterObjects2[i].getPointX("")) - 12, (gdjs.Level_321Code.GDOrbiterObjects2[i].getPointY("")) - 16, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].resetTimer("ShootTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].timerElapsedTime("ShootTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)))) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == 4 ) {
        gdjs.Level_321Code.condition2IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Orbiter"), gdjs.Level_321Code.GDOrbiterObjects2);
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Level_321Code.GDPlayerBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + 6 + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDOrbiterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOrbiterObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDOrbiterObjects2[i].getPointX("")) - 12, (gdjs.Level_321Code.GDOrbiterObjects2[i].getPointY("")) - 16, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].resetTimer("ShootTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].timerElapsedTime("ShootTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)))) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == 5 ) {
        gdjs.Level_321Code.condition2IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Orbiter"), gdjs.Level_321Code.GDOrbiterObjects2);
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Level_321Code.GDPlayerBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) + 6 + (gdjs.Level_321Code.GDPlayerObjects2[i].getAnimation()) * 5, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 10, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDOrbiterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOrbiterObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDOrbiterObjects2[i].getPointX("")) - 12, (gdjs.Level_321Code.GDOrbiterObjects2[i].getPointY("")) - 16, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 750, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].resetTimer("ShootTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].timerElapsedTime("SpecialTimer", 1.5) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Level_321Code.GDPlayerBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 245, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 250, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 255, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 260, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 265, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 270, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 275, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 280, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 285, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 290, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 2, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, 295, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].resetTimer("SpecialTimer");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Level_321Code.GDPlayerBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerBulletObjects2[i].setScale(0.75);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)) >= 2 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)).setNumber(0.230);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Orbiter"), gdjs.Level_321Code.GDOrbiterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOrbiterObjects2Objects) > (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects2[0].getVariables()).getFromIndex(1))) - 2;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDOrbiterObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDOrbiterObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOrbiterObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level_321Code.stopDoWhile3 = false;
do {gdjs.copyArray(runtimeScene.getObjects("Orbiter"), gdjs.Level_321Code.GDOrbiterObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOrbiterObjects3Objects) < (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects3[0].getVariables()).getFromIndex(1))) - 2;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOrbiterObjects3Objects, (( gdjs.Level_321Code.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects3[0].getPointX("")) + (( gdjs.Level_321Code.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects3[0].getWidth()), (( gdjs.Level_321Code.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects3[0].getPointY("")), "");
}
{ //Subevents: 
gdjs.Level_321Code.eventsList5(runtimeScene);} //Subevents end.
}
} else gdjs.Level_321Code.stopDoWhile3 = true; 
} while ( !gdjs.Level_321Code.stopDoWhile3 );

}


{


{
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift"));
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Archmage"), gdjs.Level_321Code.GDArchmageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Level_321Code.GDEnemy3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects2ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects2ObjectsGDgdjs_46Level_95321Code_46GDEnemy3Objects2ObjectsGDgdjs_46Level_95321Code_46GDArchmageObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDArchmageObjects2 */
/* Reuse gdjs.Level_321Code.GDEnemy1Objects2 */
/* Reuse gdjs.Level_321Code.GDEnemy2Objects2 */
/* Reuse gdjs.Level_321Code.GDEnemy3Objects2 */
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy3Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy3Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDArchmageObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDArchmageObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Level_321Code.GDEnemyBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemyBulletObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDEnemyBulletObjects2 */
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemyBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) >= 1;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health")._getHealth() > 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ShieldRecharge"), gdjs.Level_321Code.GDShieldRechargeObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldRechargeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldRechargeObjects2[i].setString("Shield: Active");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldRechargeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldRechargeObjects2[i].setColor("0;255;6");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].pauseTimer("ShieldTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health")._getHealth() == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ShieldRecharge"), gdjs.Level_321Code.GDShieldRechargeObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldRechargeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldRechargeObjects2[i].setString("Shield: Charging\n " + (gdjs.RuntimeObject.getVariableString(((gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects2[0].getVariables()).getFromIndex(5))) + "%");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldRechargeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldRechargeObjects2[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].unpauseTimer("ShieldTimer");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(5)).setNumber(gdjs.evtTools.common.trunc((gdjs.Level_321Code.GDPlayerObjects2[i].getTimerElapsedTimeInSeconds("ShieldTimer")) * 100) / 10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(4)) == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShieldRecharge"), gdjs.Level_321Code.GDShieldRechargeObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDShieldRechargeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldRechargeObjects2[i].setString("INVINCIBLE");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDShieldRechargeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDShieldRechargeObjects2[i].setColor("0;156;4");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health")._getHealth() == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7835948);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].resetTimer("ShieldTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].timerElapsedTime("ShieldTimer", 10) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Health").Heal(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(75);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(150);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num4");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(250);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num5");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setNumber(400);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num6");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects2ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects2ObjectsGDgdjs_46Level_95321Code_46GDEnemy3Objects2ObjectsGDgdjs_46Level_95321Code_46GDArchmageObjects2Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects2, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects2, "Enemy3": gdjs.Level_321Code.GDEnemy3Objects2, "Archmage": gdjs.Level_321Code.GDArchmageObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Level_321Code.GDPlayerBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHitEffectObjects2Objects = Hashtable.newFrom({"HitEffect": gdjs.Level_321Code.GDHitEffectObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Level_321Code.GDEnemyBulletObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects2Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOnScreenDetectorObjects2Objects = Hashtable.newFrom({"OnScreenDetector": gdjs.Level_321Code.GDOnScreenDetectorObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemyBulletObjects3Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Level_321Code.GDEnemyBulletObjects3});gdjs.Level_321Code.eventsList13 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9061348);
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level_321Code.GDEnemy1Objects2, gdjs.Level_321Code.GDEnemy1Objects3);

{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects3[i].resetTimer("FireCool");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects3[i].unpauseTimer("FireCool");
}
}}

}


{

/* Reuse gdjs.Level_321Code.GDEnemy1Objects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy1Objects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy1Objects2[i].timerElapsedTime("FireCool", (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDEnemy1Objects2[i].getVariables().getFromIndex(1)))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy1Objects2[k] = gdjs.Level_321Code.GDEnemy1Objects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy1Objects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDEnemy1Objects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects2[i].returnVariable(gdjs.Level_321Code.GDEnemy1Objects2[i].getVariables().getFromIndex(2)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects2[i].resetTimer("FireCool");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects2[i].pauseTimer("FireCool");
}
}}

}


};gdjs.Level_321Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_321Code.GDEnemy1Objects2, gdjs.Level_321Code.GDEnemy1Objects3);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy1Objects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy1Objects3[i].getVariableNumber(gdjs.Level_321Code.GDEnemy1Objects3[i].getVariables().getFromIndex(2)) < (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDEnemy1Objects3[i].getVariables().getFromIndex(0))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy1Objects3[k] = gdjs.Level_321Code.GDEnemy1Objects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy1Objects3.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDEnemy1Objects3 */
gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Level_321Code.GDEnemyBulletObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects3[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDEnemy1Objects3[i].getPointX("")) + 16, (gdjs.Level_321Code.GDEnemy1Objects3[i].getPointY("")) + 40, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemyBulletObjects3Objects, (gdjs.Level_321Code.GDEnemy1Objects3[i].getAngle()) + 180 + gdjs.randomInRange(-((gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDEnemy1Objects3[i].getVariables().get("shotvar")))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDEnemy1Objects3[i].getVariables().get("shotvar")))), 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDEnemy1Objects2, gdjs.Level_321Code.GDEnemy1Objects3);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy1Objects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy1Objects3[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy1Objects3[k] = gdjs.Level_321Code.GDEnemy1Objects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy1Objects3.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDEnemy1Objects3 */
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects3[i].returnVariable(gdjs.Level_321Code.GDEnemy1Objects3[i].getVariables().getFromIndex(2)).add(1);
}
}}

}


{

/* Reuse gdjs.Level_321Code.GDEnemy1Objects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy1Objects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy1Objects2[i].getVariableNumber(gdjs.Level_321Code.GDEnemy1Objects2[i].getVariables().getFromIndex(2)) == (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDEnemy1Objects2[i].getVariables().getFromIndex(0))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy1Objects2[k] = gdjs.Level_321Code.GDEnemy1Objects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy1Objects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDEnemy1Objects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects2[i].unpauseTimer("FireCool");
}
}
{ //Subevents
gdjs.Level_321Code.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDArchmageObjects2Objects = Hashtable.newFrom({"Archmage": gdjs.Level_321Code.GDArchmageObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOnScreenDetectorObjects2Objects = Hashtable.newFrom({"OnScreenDetector": gdjs.Level_321Code.GDOnScreenDetectorObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Level_321Code.GDEnemyBulletObjects2});gdjs.Level_321Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Archmage"), gdjs.Level_321Code.GDArchmageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Level_321Code.GDEnemy3Objects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Level_321Code.GDPlayerBulletObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects2ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects2ObjectsGDgdjs_46Level_95321Code_46GDEnemy3Objects2ObjectsGDgdjs_46Level_95321Code_46GDArchmageObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerBulletObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDArchmageObjects2 */
/* Reuse gdjs.Level_321Code.GDEnemy1Objects2 */
/* Reuse gdjs.Level_321Code.GDEnemy2Objects2 */
/* Reuse gdjs.Level_321Code.GDEnemy3Objects2 */
/* Reuse gdjs.Level_321Code.GDPlayerBulletObjects2 */
gdjs.Level_321Code.GDHitEffectObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHitEffectObjects2Objects, (( gdjs.Level_321Code.GDPlayerBulletObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerBulletObjects2[0].getPointX("")) + (( gdjs.Level_321Code.GDPlayerBulletObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerBulletObjects2[0].getWidth()) / 2, (( gdjs.Level_321Code.GDPlayerBulletObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerBulletObjects2[0].getPointY("")) - 10, "");
}{for(var i = 0, len = gdjs.Level_321Code.GDHitEffectObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitEffectObjects2[i].setScale(0.15);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHitEffectObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitEffectObjects2[i].resetTimer("Lifetime");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy3Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy3Objects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level_321Code.GDArchmageObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDArchmageObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHitEffectObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitEffectObjects2[i].setAngle(gdjs.Level_321Code.GDHitEffectObjects2[i].getAngle() + (gdjs.randomInRange(0, 360)));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHitEffectObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitEffectObjects2[i].setScale(gdjs.Level_321Code.GDHitEffectObjects2[i].getScale() + (gdjs.randomFloatInRange(0, 0.1)));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHitEffectObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitEffectObjects2[i].setOpacity(200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Archmage"), gdjs.Level_321Code.GDArchmageObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDArchmageObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDArchmageObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDArchmageObjects2[k] = gdjs.Level_321Code.GDArchmageObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDArchmageObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BossHP"), gdjs.Level_321Code.GDBossHPObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Level_321Code.GDEnemyBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDBossHPObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBossHPObjects2[i].setString("You have defeated the boss\n and completed the level!\n(this is all the prototype\n content currently available)");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBossHPObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBossHPObjects2[i].setX(240);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBossHPObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBossHPObjects2[i].setCharacterSize(30);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBossHPObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBossHPObjects2[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemyBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Archmage"), gdjs.Level_321Code.GDArchmageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Level_321Code.GDEnemy3Objects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy1Objects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy1Objects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy1Objects2[k] = gdjs.Level_321Code.GDEnemy1Objects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy1Objects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy2Objects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy2Objects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy2Objects2[k] = gdjs.Level_321Code.GDEnemy2Objects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy2Objects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy3Objects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy3Objects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy3Objects2[k] = gdjs.Level_321Code.GDEnemy3Objects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy3Objects2.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDArchmageObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDArchmageObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDArchmageObjects2[k] = gdjs.Level_321Code.GDArchmageObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDArchmageObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDArchmageObjects2 */
/* Reuse gdjs.Level_321Code.GDEnemy1Objects2 */
/* Reuse gdjs.Level_321Code.GDEnemy2Objects2 */
/* Reuse gdjs.Level_321Code.GDEnemy3Objects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy3Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy3Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDArchmageObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDArchmageObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(3)).add(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy2Objects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy2Objects2[i].getY() >= gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 400 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy2Objects2[k] = gdjs.Level_321Code.GDEnemy2Objects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy2Objects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDEnemy2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Level_321Code.GDEnemyBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects2[i].addForce(-(150), -(55), 0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDEnemy2Objects2[i].getPointX("")), (gdjs.Level_321Code.GDEnemy2Objects2[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemyBulletObjects2Objects, (gdjs.Level_321Code.GDEnemy2Objects2[i].getAngle()) + 190, 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects2);
gdjs.copyArray(runtimeScene.getObjects("OnScreenDetector"), gdjs.Level_321Code.GDOnScreenDetectorObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOnScreenDetectorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList14(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects2);
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects2[i].getBehavior("MinionMovement").Move((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects2[i].getBehavior("MinionMovement").Move((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HitEffect"), gdjs.Level_321Code.GDHitEffectObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDHitEffectObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHitEffectObjects2[i].timerElapsedTime("SpecialTimer", 0.75) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDHitEffectObjects2[k] = gdjs.Level_321Code.GDHitEffectObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHitEffectObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDHitEffectObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDHitEffectObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDHitEffectObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Archmage"), gdjs.Level_321Code.GDArchmageObjects2);
gdjs.copyArray(runtimeScene.getObjects("OnScreenDetector"), gdjs.Level_321Code.GDOnScreenDetectorObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDArchmageObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDOnScreenDetectorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDArchmageObjects2 */
gdjs.copyArray(runtimeScene.getObjects("BossHP"), gdjs.Level_321Code.GDBossHPObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Level_321Code.GDEnemyBulletObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDBossHPObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBossHPObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDArchmageObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDArchmageObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDArchmageObjects2[i].getPointX("")) + (gdjs.Level_321Code.GDArchmageObjects2[i].getWidth()) / 2, (gdjs.Level_321Code.GDArchmageObjects2[i].getPointY("")) + (gdjs.Level_321Code.GDArchmageObjects2[i].getHeight()) + 5, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemyBulletObjects2Objects, gdjs.randomInRange(-(30), 210), 75, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBossHPObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBossHPObjects2[i].setString("BOSS HP:\n" + gdjs.evtTools.common.toString((( gdjs.Level_321Code.GDArchmageObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDArchmageObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{


{
}

}


{



}


};gdjs.Level_321Code.eventsList16 = function(runtimeScene) {

{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "false";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.Level_321Code.GDPauseScreenObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPauseScreenObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPauseScreenObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "true";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PauseScreen"), gdjs.Level_321Code.GDPauseScreenObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPauseScreenObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPauseScreenObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "false";
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > -(2750);
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Level_321Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("OnScreenDetector"), gdjs.Level_321Code.GDOnScreenDetectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (95 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.Level_321Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBackgroundObjects1[i].setYOffset(gdjs.Level_321Code.GDBackgroundObjects1[i].getYOffset() - (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addForce(0, -(95), 0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDOnScreenDetectorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDOnScreenDetectorObjects1[i].addForce(0, -(95), 0);
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "false";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList12(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "false";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BossHP"), gdjs.Level_321Code.GDBossHPObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].resetTimer("ShootTimer");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].resetTimer("SpecialTimer");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "king tuba II boss theme.mp3", 0, false, 50, 1);
}{for(var i = 0, len = gdjs.Level_321Code.GDBossHPObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBossHPObjects1[i].hide();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) <= -(2400);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8479828);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "tuba archmage boss theme.mp3", 0, true, 50, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Experience"), gdjs.Level_321Code.GDExperienceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDExperienceObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDExperienceObjects1[i].setString("Experience: " + (gdjs.RuntimeObject.getVariableString(((gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects1[0].getVariables()).getFromIndex(3))));
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ResetLevel"), gdjs.Level_321Code.GDResetLevelObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDResetLevelObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDResetLevelObjects1[i].hide();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) > 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ResetLevel"), gdjs.Level_321Code.GDResetLevelObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDResetLevelObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDResetLevelObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDResetLevelObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDResetLevelObjects1[i].setString("Restarting: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)) + "%");
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).add(1);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) > 100;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDPlayerObjects4.length = 0;
gdjs.Level_321Code.GDPlayerBulletObjects1.length = 0;
gdjs.Level_321Code.GDPlayerBulletObjects2.length = 0;
gdjs.Level_321Code.GDPlayerBulletObjects3.length = 0;
gdjs.Level_321Code.GDPlayerBulletObjects4.length = 0;
gdjs.Level_321Code.GDPauseScreenObjects1.length = 0;
gdjs.Level_321Code.GDPauseScreenObjects2.length = 0;
gdjs.Level_321Code.GDPauseScreenObjects3.length = 0;
gdjs.Level_321Code.GDPauseScreenObjects4.length = 0;
gdjs.Level_321Code.GDEnemy1Objects1.length = 0;
gdjs.Level_321Code.GDEnemy1Objects2.length = 0;
gdjs.Level_321Code.GDEnemy1Objects3.length = 0;
gdjs.Level_321Code.GDEnemy1Objects4.length = 0;
gdjs.Level_321Code.GDBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundObjects3.length = 0;
gdjs.Level_321Code.GDBackgroundObjects4.length = 0;
gdjs.Level_321Code.GDEnemy2Objects1.length = 0;
gdjs.Level_321Code.GDEnemy2Objects2.length = 0;
gdjs.Level_321Code.GDEnemy2Objects3.length = 0;
gdjs.Level_321Code.GDEnemy2Objects4.length = 0;
gdjs.Level_321Code.GDEnemy3Objects1.length = 0;
gdjs.Level_321Code.GDEnemy3Objects2.length = 0;
gdjs.Level_321Code.GDEnemy3Objects3.length = 0;
gdjs.Level_321Code.GDEnemy3Objects4.length = 0;
gdjs.Level_321Code.GDHitEffectObjects1.length = 0;
gdjs.Level_321Code.GDHitEffectObjects2.length = 0;
gdjs.Level_321Code.GDHitEffectObjects3.length = 0;
gdjs.Level_321Code.GDHitEffectObjects4.length = 0;
gdjs.Level_321Code.GDOrbiterObjects1.length = 0;
gdjs.Level_321Code.GDOrbiterObjects2.length = 0;
gdjs.Level_321Code.GDOrbiterObjects3.length = 0;
gdjs.Level_321Code.GDOrbiterObjects4.length = 0;
gdjs.Level_321Code.GDBarsObjects1.length = 0;
gdjs.Level_321Code.GDBarsObjects2.length = 0;
gdjs.Level_321Code.GDBarsObjects3.length = 0;
gdjs.Level_321Code.GDBarsObjects4.length = 0;
gdjs.Level_321Code.GDArchmageObjects1.length = 0;
gdjs.Level_321Code.GDArchmageObjects2.length = 0;
gdjs.Level_321Code.GDArchmageObjects3.length = 0;
gdjs.Level_321Code.GDArchmageObjects4.length = 0;
gdjs.Level_321Code.GDEnemyBulletObjects1.length = 0;
gdjs.Level_321Code.GDEnemyBulletObjects2.length = 0;
gdjs.Level_321Code.GDEnemyBulletObjects3.length = 0;
gdjs.Level_321Code.GDEnemyBulletObjects4.length = 0;
gdjs.Level_321Code.GDOnScreenDetectorObjects1.length = 0;
gdjs.Level_321Code.GDOnScreenDetectorObjects2.length = 0;
gdjs.Level_321Code.GDOnScreenDetectorObjects3.length = 0;
gdjs.Level_321Code.GDOnScreenDetectorObjects4.length = 0;
gdjs.Level_321Code.GDExperienceObjects1.length = 0;
gdjs.Level_321Code.GDExperienceObjects2.length = 0;
gdjs.Level_321Code.GDExperienceObjects3.length = 0;
gdjs.Level_321Code.GDExperienceObjects4.length = 0;
gdjs.Level_321Code.GDResetLevelObjects1.length = 0;
gdjs.Level_321Code.GDResetLevelObjects2.length = 0;
gdjs.Level_321Code.GDResetLevelObjects3.length = 0;
gdjs.Level_321Code.GDResetLevelObjects4.length = 0;
gdjs.Level_321Code.GDBossHPObjects1.length = 0;
gdjs.Level_321Code.GDBossHPObjects2.length = 0;
gdjs.Level_321Code.GDBossHPObjects3.length = 0;
gdjs.Level_321Code.GDBossHPObjects4.length = 0;
gdjs.Level_321Code.GDShieldRechargeObjects1.length = 0;
gdjs.Level_321Code.GDShieldRechargeObjects2.length = 0;
gdjs.Level_321Code.GDShieldRechargeObjects3.length = 0;
gdjs.Level_321Code.GDShieldRechargeObjects4.length = 0;

gdjs.Level_321Code.eventsList16(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
