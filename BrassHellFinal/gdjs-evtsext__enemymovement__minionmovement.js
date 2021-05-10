
gdjs.evtsExt__EnemyMovement__MinionMovement = gdjs.evtsExt__EnemyMovement__MinionMovement || {};

/**
 * Behavior generated from MinionMovement
 */
gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement = class MinionMovement extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.YMoveSpeed = behaviorData.YMoveSpeed !== undefined ? behaviorData.YMoveSpeed : Number("0") || 0;
    this._behaviorData.XMoveSpeed = behaviorData.XMoveSpeed !== undefined ? behaviorData.XMoveSpeed : Number("0") || 0;
    this._behaviorData.YWiggle = behaviorData.YWiggle !== undefined ? behaviorData.YWiggle : Number("0") || 0;
    this._behaviorData.XWiggle = behaviorData.XWiggle !== undefined ? behaviorData.XWiggle : Number("0") || 0;
    this._behaviorData.WiggleTimer = behaviorData.WiggleTimer !== undefined ? behaviorData.WiggleTimer : Number("1") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.YMoveSpeed !== newBehaviorData.YMoveSpeed)
      this._behaviorData.YMoveSpeed = newBehaviorData.YMoveSpeed;
    if (oldBehaviorData.XMoveSpeed !== newBehaviorData.XMoveSpeed)
      this._behaviorData.XMoveSpeed = newBehaviorData.XMoveSpeed;
    if (oldBehaviorData.YWiggle !== newBehaviorData.YWiggle)
      this._behaviorData.YWiggle = newBehaviorData.YWiggle;
    if (oldBehaviorData.XWiggle !== newBehaviorData.XWiggle)
      this._behaviorData.XWiggle = newBehaviorData.XWiggle;
    if (oldBehaviorData.WiggleTimer !== newBehaviorData.WiggleTimer)
      this._behaviorData.WiggleTimer = newBehaviorData.WiggleTimer;

    return true;
  }

  // Properties:
  
  _getYMoveSpeed() {
    return this._behaviorData.YMoveSpeed !== undefined ? this._behaviorData.YMoveSpeed : Number("0") || 0;
  }
  _setYMoveSpeed(newValue) {
    this._behaviorData.YMoveSpeed = newValue;
  }
  _getXMoveSpeed() {
    return this._behaviorData.XMoveSpeed !== undefined ? this._behaviorData.XMoveSpeed : Number("0") || 0;
  }
  _setXMoveSpeed(newValue) {
    this._behaviorData.XMoveSpeed = newValue;
  }
  _getYWiggle() {
    return this._behaviorData.YWiggle !== undefined ? this._behaviorData.YWiggle : Number("0") || 0;
  }
  _setYWiggle(newValue) {
    this._behaviorData.YWiggle = newValue;
  }
  _getXWiggle() {
    return this._behaviorData.XWiggle !== undefined ? this._behaviorData.XWiggle : Number("0") || 0;
  }
  _setXWiggle(newValue) {
    this._behaviorData.XWiggle = newValue;
  }
  _getWiggleTimer() {
    return this._behaviorData.WiggleTimer !== undefined ? this._behaviorData.WiggleTimer : Number("1") || 0;
  }
  _setWiggleTimer(newValue) {
    this._behaviorData.WiggleTimer = newValue;
  }
}

// Methods:
gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext = {};
gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1= [];
gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects2= [];

gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1[i].addForce((gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getXMoveSpeed()), (gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getYMoveSpeed()), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1[i].addForce((gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getXWiggle()) * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 4), (gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getYWiggle()) * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 4), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1[i].rotate((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1[i].getVariables().get("rot"))), runtimeScene);
}
}}

}


};

gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.Move = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.MoveContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("EnemyMovement::MinionMovement", gdjs.evtsExt__EnemyMovement__MinionMovement.MinionMovement);
