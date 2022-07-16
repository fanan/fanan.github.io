(function(){
'use strict';
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.9.0",
  "fileLevelThis": this
});
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException(((arg0 + " is not an instance of ") + arg1)))
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1)
  };
  $throwClassCastException(arg0, arg1)
}
function $throwArrayIndexOutOfBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))))
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance, x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0)
  } else {
    return instance.indexOf__I__I(x0)
  }
}
function $dp_indexOf__I__I__I(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I__I(instance, x0, x1)
  } else {
    return instance.indexOf__I__I__I(x0, x1)
  }
}
function $dp_lastIndexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__lastIndexOf__I__I(instance, x0)
  } else {
    return instance.lastIndexOf__I__I(x0)
  }
}
function $dp_substring__I__I__T(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__substring__I__I__T(instance, x0, x1)
  } else {
    return instance.substring__I__I__T(x0, x1)
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"))
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"))
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"))
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"))
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"))
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"))
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"))
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"))
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"))
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"))
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isJSClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
function $s_LDearHenry_Application__main__AT__V(args) {
  $m_LDearHenry_Application$().main__AT__V(args)
}
/** @constructor */
function $c_LDearHenry_Application$() {
  this.LDearHenry_Application$__f_canvasId = null;
  this.LDearHenry_Application$__f_canvasId = "canvas"
}
$c_LDearHenry_Application$.prototype = new $h_O();
$c_LDearHenry_Application$.prototype.constructor = $c_LDearHenry_Application$;
/** @constructor */
function $h_LDearHenry_Application$() {
  /*<skip>*/
}
$h_LDearHenry_Application$.prototype = $c_LDearHenry_Application$.prototype;
$c_LDearHenry_Application$.prototype.createCanvas__Lorg_scalajs_dom_HTMLCanvasElement = (function() {
  var canvas = document.createElement("canvas");
  canvas.id = this.LDearHenry_Application$__f_canvasId;
  canvas.width = $doubleToInt($uD(window.innerWidth));
  canvas.height = $doubleToInt($uD(window.innerHeight));
  canvas.style.margin = "0";
  canvas.style.padding = "0";
  canvas.style.display = "block";
  canvas.style.border = "0";
  document.body.style.margin = "0";
  document.body.appendChild(canvas);
  return canvas
});
$c_LDearHenry_Application$.prototype.main__AT__V = (function(args) {
  var canvas = this.createCanvas__Lorg_scalajs_dom_HTMLCanvasElement();
  var game = new $c_LDearHenry_BlackAndWhiteChess_Game("Hello Henry", $as_T(canvas.id));
  game.start__V()
});
var $d_LDearHenry_Application$ = new $TypeData().initClass({
  LDearHenry_Application$: 0
}, false, "DearHenry.Application$", {
  LDearHenry_Application$: 1,
  O: 1
});
$c_LDearHenry_Application$.prototype.$classData = $d_LDearHenry_Application$;
var $n_LDearHenry_Application$;
function $m_LDearHenry_Application$() {
  if ((!$n_LDearHenry_Application$)) {
    $n_LDearHenry_Application$ = new $c_LDearHenry_Application$()
  };
  return $n_LDearHenry_Application$
}
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_BoardSprite$() {
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_blackTurn = 0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_whiteTurn = 0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnNames = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnStatus = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows = 0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols = 0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_totalGrids = 0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_lineWidth = 0.0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_hintColor = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_DearHenry$BlackAndWhiteChess$BoardSprite$$directions = null;
  $n_LDearHenry_BlackAndWhiteChess_BoardSprite$ = this;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_blackTurn = 0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_whiteTurn = 1;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnNames = new ($d_T.getArrayOf().constr)(["\u9ed1\u68cb", "\u767d\u68cb"]);
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnStatus = new ($d_LDearHenry_BlackAndWhiteChess_GridStatus.getArrayOf().constr)([$m_LDearHenry_BlackAndWhiteChess_Black$(), $m_LDearHenry_BlackAndWhiteChess_White$()]);
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows = 8;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols = 8;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_totalGrids = Math.imul(this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows, this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols);
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_lineWidth = 10.0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_hintColor = $m_LDearHenry_engine_Engine$().rgbToHex__I__I__I__T(176, 89, 35);
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_DearHenry$BlackAndWhiteChess$BoardSprite$$directions = new ($d_T2.getArrayOf().constr)([new $c_T2$mcII$sp(0, 1), new $c_T2$mcII$sp(0, (-1)), new $c_T2$mcII$sp(1, 0), new $c_T2$mcII$sp((-1), 0), new $c_T2$mcII$sp(1, 1), new $c_T2$mcII$sp(1, (-1)), new $c_T2$mcII$sp((-1), 1), new $c_T2$mcII$sp((-1), (-1))])
}
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype = new $h_O();
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_BoardSprite$;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_BoardSprite$() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype = $c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype;
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype.RowColToIndex__I__I__I = (function(row, col) {
  $m_s_Predef$().assert__Z__V(this.valid__I__I__Z(row, col));
  return ((Math.imul(row, this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols) + col) | 0)
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype.IndexToRowCol__I__T2 = (function(index) {
  $m_s_Predef$().assert__Z__V(((index >= 0) && (index < this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_totalGrids)));
  var col = $intMod(index, this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols);
  var row = $intDiv(index, this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols);
  return new $c_T2$mcII$sp(row, col)
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype.valid__I__I__Z = (function(row, col) {
  return ((((row >= 0) && (row < this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows)) && (col >= 0)) && (col < this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols))
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype.calcPositions__Lorg_scalajs_dom_CanvasRenderingContext2D__T4 = (function(context) {
  $m_s_Predef$().assert__Z__V((this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows === this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols));
  var width = $uI(context.canvas.width);
  var height = $uI(context.canvas.height);
  var boardSize = $uD(Math.min(width, height));
  var gridSize = (boardSize / this.LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols);
  var startX = ((width - boardSize) / 2.0);
  var startY = ((height - boardSize) / 2.0);
  return new $c_T4(startX, startY, gridSize, boardSize)
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype.calcPanels__Lorg_scalajs_dom_CanvasRenderingContext2D__T2 = (function(context) {
  var x1 = this.calcPositions__Lorg_scalajs_dom_CanvasRenderingContext2D__T4(context);
  if ((x1 === null)) {
    throw new $c_s_MatchError(x1)
  };
  var startX = $uD(x1.T4__f__1);
  var startY = $uD(x1.T4__f__2);
  var boardSize = $uD(x1.T4__f__4);
  return ((startX > 0.0) ? $ct_T2__O__O__(new $c_T2(), new $c_LDearHenry_engine_Rectangle(0.0, 0.0, startX, boardSize), new $c_LDearHenry_engine_Rectangle((startX + boardSize), 0.0, startX, boardSize)) : $ct_T2__O__O__(new $c_T2(), new $c_LDearHenry_engine_Rectangle(0.0, 0.0, boardSize, startY), new $c_LDearHenry_engine_Rectangle(0.0, (startY + boardSize), boardSize, startY)))
});
var $d_LDearHenry_BlackAndWhiteChess_BoardSprite$ = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_BoardSprite$: 0
}, false, "DearHenry.BlackAndWhiteChess.BoardSprite$", {
  LDearHenry_BlackAndWhiteChess_BoardSprite$: 1,
  O: 1
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_BoardSprite$;
var $n_LDearHenry_BlackAndWhiteChess_BoardSprite$;
function $m_LDearHenry_BlackAndWhiteChess_BoardSprite$() {
  if ((!$n_LDearHenry_BlackAndWhiteChess_BoardSprite$)) {
    $n_LDearHenry_BlackAndWhiteChess_BoardSprite$ = new $c_LDearHenry_BlackAndWhiteChess_BoardSprite$()
  };
  return $n_LDearHenry_BlackAndWhiteChess_BoardSprite$
}
function $is_LDearHenry_BlackAndWhiteChess_GridStatus(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.LDearHenry_BlackAndWhiteChess_GridStatus)))
}
function $as_LDearHenry_BlackAndWhiteChess_GridStatus(obj) {
  return (($is_LDearHenry_BlackAndWhiteChess_GridStatus(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "DearHenry.BlackAndWhiteChess.GridStatus"))
}
function $isArrayOf_LDearHenry_BlackAndWhiteChess_GridStatus(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.LDearHenry_BlackAndWhiteChess_GridStatus)))
}
function $asArrayOf_LDearHenry_BlackAndWhiteChess_GridStatus(obj, depth) {
  return (($isArrayOf_LDearHenry_BlackAndWhiteChess_GridStatus(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "LDearHenry.BlackAndWhiteChess.GridStatus;", depth))
}
var $d_LDearHenry_BlackAndWhiteChess_GridStatus = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_GridStatus: 0
}, true, "DearHenry.BlackAndWhiteChess.GridStatus", {
  LDearHenry_BlackAndWhiteChess_GridStatus: 1,
  O: 1
});
function $p_LDearHenry_BlackAndWhiteChess_Panel__paintColor__Lorg_scalajs_dom_CanvasRenderingContext2D__LDearHenry_engine_Point__D__V($thiz, context, center, radius) {
  if ($thiz.LDearHenry_BlackAndWhiteChess_Panel__f_myTurn) {
    var s = $m_LDearHenry_BlackAndWhiteChess_Panel$().LDearHenry_BlackAndWhiteChess_Panel$__f_turnColor;
    context.fillStyle = s;
    center.fillSquare__Lorg_scalajs_dom_CanvasRenderingContext2D__D__V(context, radius)
  };
  var s$1 = $thiz.LDearHenry_BlackAndWhiteChess_Panel__f_status.color__T();
  context.fillStyle = s$1;
  center.fillCircle__Lorg_scalajs_dom_CanvasRenderingContext2D__D__V(context, radius)
}
function $p_LDearHenry_BlackAndWhiteChess_Panel__paintCount__Lorg_scalajs_dom_CanvasRenderingContext2D__LDearHenry_engine_Rectangle__V($thiz, context, position) {
  context.textAlign = "center";
  context.textBaseline = "middle";
  var array = ["", "px serif"];
  var $$x1 = new $c_s_StringContext($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array));
  var array$1 = [position.LDearHenry_engine_Rectangle__f_h];
  context.font = $$x1.s__sc_Seq__T($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1));
  var s = $thiz.LDearHenry_BlackAndWhiteChess_Panel__f_status.color__T();
  context.fillStyle = s;
  var s$1 = $thiz.LDearHenry_BlackAndWhiteChess_Panel__f_status.color__T();
  context.strokeStyle = s$1;
  var center = position.center__LDearHenry_engine_Point();
  var array$2 = ["", ""];
  var $$x2 = new $c_s_StringContext($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2));
  var array$3 = [$thiz.LDearHenry_BlackAndWhiteChess_Panel__f_count];
  context.fillText($$x2.s__sc_Seq__T($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3)), center.LDearHenry_engine_Point__f_x, center.LDearHenry_engine_Point__f_y, position.LDearHenry_engine_Rectangle__f_w)
}
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_Panel(rect, status, count, myTurn) {
  this.LDearHenry_BlackAndWhiteChess_Panel__f_rect = null;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_status = null;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_count = 0;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_myTurn = false;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_radius = 0.0;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_rect = rect;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_status = status;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_count = count;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_myTurn = myTurn;
  var x = rect.LDearHenry_engine_Rectangle__f_w;
  var y = rect.LDearHenry_engine_Rectangle__f_h;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_radius = ($uD(Math.min(x, y)) / 4.0)
}
$c_LDearHenry_BlackAndWhiteChess_Panel.prototype = new $h_O();
$c_LDearHenry_BlackAndWhiteChess_Panel.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_Panel;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_Panel() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_Panel.prototype = $c_LDearHenry_BlackAndWhiteChess_Panel.prototype;
$c_LDearHenry_BlackAndWhiteChess_Panel.prototype.paint__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(context) {
  var s = $m_LDearHenry_BlackAndWhiteChess_Panel$().LDearHenry_BlackAndWhiteChess_Panel$__f_fillStyle;
  context.fillStyle = s;
  this.LDearHenry_BlackAndWhiteChess_Panel__f_rect.fill__Lorg_scalajs_dom_CanvasRenderingContext2D__V(context);
  var s$1 = this.LDearHenry_BlackAndWhiteChess_Panel__f_status.color__T();
  context.fillStyle = s$1;
  context.beginPath();
  var colorCenter = this.LDearHenry_BlackAndWhiteChess_Panel__f_rect.center__LDearHenry_engine_Point().move__LDearHenry_engine_Point__LDearHenry_engine_Point((this.LDearHenry_BlackAndWhiteChess_Panel__f_rect.isFat__Z() ? new $c_LDearHenry_engine_Point((-this.LDearHenry_BlackAndWhiteChess_Panel__f_radius), 0.0) : new $c_LDearHenry_engine_Point(0.0, (-this.LDearHenry_BlackAndWhiteChess_Panel__f_radius))));
  $p_LDearHenry_BlackAndWhiteChess_Panel__paintColor__Lorg_scalajs_dom_CanvasRenderingContext2D__LDearHenry_engine_Point__D__V(this, context, colorCenter, this.LDearHenry_BlackAndWhiteChess_Panel__f_radius);
  var counterCenter = this.LDearHenry_BlackAndWhiteChess_Panel__f_rect.center__LDearHenry_engine_Point().move__LDearHenry_engine_Point__LDearHenry_engine_Point((this.LDearHenry_BlackAndWhiteChess_Panel__f_rect.isFat__Z() ? new $c_LDearHenry_engine_Point(this.LDearHenry_BlackAndWhiteChess_Panel__f_radius, 0.0) : new $c_LDearHenry_engine_Point(0.0, this.LDearHenry_BlackAndWhiteChess_Panel__f_radius)));
  $p_LDearHenry_BlackAndWhiteChess_Panel__paintCount__Lorg_scalajs_dom_CanvasRenderingContext2D__LDearHenry_engine_Rectangle__V(this, context, counterCenter.toSquare__D__LDearHenry_engine_Rectangle(this.LDearHenry_BlackAndWhiteChess_Panel__f_radius))
});
var $d_LDearHenry_BlackAndWhiteChess_Panel = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_Panel: 0
}, false, "DearHenry.BlackAndWhiteChess.Panel", {
  LDearHenry_BlackAndWhiteChess_Panel: 1,
  O: 1
});
$c_LDearHenry_BlackAndWhiteChess_Panel.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_Panel;
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_Panel$() {
  this.LDearHenry_BlackAndWhiteChess_Panel$__f_fillStyle = null;
  this.LDearHenry_BlackAndWhiteChess_Panel$__f_turnColor = null;
  $n_LDearHenry_BlackAndWhiteChess_Panel$ = this;
  this.LDearHenry_BlackAndWhiteChess_Panel$__f_fillStyle = $m_LDearHenry_engine_Engine$().rgbToHex__I__I__I__T(154, 180, 205);
  this.LDearHenry_BlackAndWhiteChess_Panel$__f_turnColor = $m_LDearHenry_engine_Engine$().rgbToHex__I__I__I__T(64, 125, 82)
}
$c_LDearHenry_BlackAndWhiteChess_Panel$.prototype = new $h_O();
$c_LDearHenry_BlackAndWhiteChess_Panel$.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_Panel$;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_Panel$() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_Panel$.prototype = $c_LDearHenry_BlackAndWhiteChess_Panel$.prototype;
var $d_LDearHenry_BlackAndWhiteChess_Panel$ = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_Panel$: 0
}, false, "DearHenry.BlackAndWhiteChess.Panel$", {
  LDearHenry_BlackAndWhiteChess_Panel$: 1,
  O: 1
});
$c_LDearHenry_BlackAndWhiteChess_Panel$.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_Panel$;
var $n_LDearHenry_BlackAndWhiteChess_Panel$;
function $m_LDearHenry_BlackAndWhiteChess_Panel$() {
  if ((!$n_LDearHenry_BlackAndWhiteChess_Panel$)) {
    $n_LDearHenry_BlackAndWhiteChess_Panel$ = new $c_LDearHenry_BlackAndWhiteChess_Panel$()
  };
  return $n_LDearHenry_BlackAndWhiteChess_Panel$
}
function $ct_LDearHenry_engine_Engine__T__T__($thiz, gameName, canvasId) {
  $thiz.LDearHenry_engine_Engine__f_gameName = gameName;
  $thiz.LDearHenry_engine_Engine__f_canvasId = canvasId;
  $thiz.LDearHenry_engine_Engine__f_canvas = document.getElementById(canvasId);
  $thiz.LDearHenry_engine_Engine__f_context = $thiz.LDearHenry_engine_Engine__f_canvas.getContext("2d");
  var this$1 = $m_scm_Queue$();
  $thiz.LDearHenry_engine_Engine__f_scheduleQueue = $as_scm_Queue($as_sc_GenTraversable(this$1.newBuilder__scm_Builder().result__O()));
  $thiz.LDearHenry_engine_Engine__f_window = window;
  $thiz.LDearHenry_engine_Engine__f_lastTime = 0.0;
  $thiz.LDearHenry_engine_Engine__f_deltaTime = 0.0;
  $thiz.LDearHenry_engine_Engine__f_fps = 0.0;
  $m_scm_ArrayBuffer$();
  var this$3 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
  $thiz.LDearHenry_engine_Engine__f_sprites = this$3;
  $thiz.LDearHenry_engine_Engine__f_keyAndListeners = $ct_scm_HashMap__(new $c_scm_HashMap());
  $thiz.LDearHenry_engine_Engine__f_window.onkeypress = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((arg$outer) => ((e$2) => {
    arg$outer.keyPressed__Lorg_scalajs_dom_KeyboardEvent__V(e$2)
  }))($thiz)));
  document.title = gameName;
  return $thiz
}
/** @constructor */
function $c_LDearHenry_engine_Engine() {
  this.LDearHenry_engine_Engine__f_gameName = null;
  this.LDearHenry_engine_Engine__f_canvasId = null;
  this.LDearHenry_engine_Engine__f_canvas = null;
  this.LDearHenry_engine_Engine__f_context = null;
  this.LDearHenry_engine_Engine__f_scheduleQueue = null;
  this.LDearHenry_engine_Engine__f_window = null;
  this.LDearHenry_engine_Engine__f_lastTime = 0.0;
  this.LDearHenry_engine_Engine__f_deltaTime = 0.0;
  this.LDearHenry_engine_Engine__f_fps = 0.0;
  this.LDearHenry_engine_Engine__f_sprites = null;
  this.LDearHenry_engine_Engine__f_keyAndListeners = null
}
$c_LDearHenry_engine_Engine.prototype = new $h_O();
$c_LDearHenry_engine_Engine.prototype.constructor = $c_LDearHenry_engine_Engine;
/** @constructor */
function $h_LDearHenry_engine_Engine() {
  /*<skip>*/
}
$h_LDearHenry_engine_Engine.prototype = $c_LDearHenry_engine_Engine.prototype;
$c_LDearHenry_engine_Engine.prototype.getTimeNow__D = (function() {
  return $uD(this.LDearHenry_engine_Engine__f_window.performance.now())
});
$c_LDearHenry_engine_Engine.prototype.updateFrameRate__V = (function() {
  this.LDearHenry_engine_Engine__f_fps = (1000.0 / this.LDearHenry_engine_Engine__f_deltaTime)
});
$c_LDearHenry_engine_Engine.prototype.tick__D__V = (function(time) {
  this.LDearHenry_engine_Engine__f_deltaTime = (time - this.LDearHenry_engine_Engine__f_lastTime);
  this.updateFrameRate__V();
  this.LDearHenry_engine_Engine__f_lastTime = time
});
$c_LDearHenry_engine_Engine.prototype.start__V = (function() {
  this.LDearHenry_engine_Engine__f_lastTime = this.getTimeNow__D();
  this.LDearHenry_engine_Engine__f_window.requestAnimationFrame($m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((arg$outer) => ((time$2) => {
    var time = $uD(time$2);
    arg$outer.animate__D__V(time)
  }))(this))))
});
$c_LDearHenry_engine_Engine.prototype.clearScreen__V = (function() {
  this.LDearHenry_engine_Engine__f_context.clearRect(0.0, 0.0, $uI(this.LDearHenry_engine_Engine__f_canvas.width), $uI(this.LDearHenry_engine_Engine__f_canvas.height))
});
$c_LDearHenry_engine_Engine.prototype.animate__D__V = (function(time) {
  var this$1 = this.LDearHenry_engine_Engine__f_scheduleQueue;
  var shouldRunScheduledFunc = (!this$1.isEmpty__Z());
  this.tick__D__V(time);
  this.clearScreen__V();
  this.paintUnderSprites__V();
  this.updateSprites__D__V(this.LDearHenry_engine_Engine__f_deltaTime);
  this.paintSprites__D__V(this.LDearHenry_engine_Engine__f_deltaTime);
  this.LDearHenry_engine_Engine__f_window.requestAnimationFrame($m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((arg$outer) => ((newTime$2) => {
    var newTime = $uD(newTime$2);
    arg$outer.animate__D__V(newTime)
  }))(this))));
  if (shouldRunScheduledFunc) {
    while (true) {
      var this$2 = this.LDearHenry_engine_Engine__f_scheduleQueue;
      if ((!this$2.isEmpty__Z())) {
        $as_F0(this.LDearHenry_engine_Engine__f_scheduleQueue.dequeue__O()).apply$mcV$sp__V()
      } else {
        break
      }
    }
  }
});
$c_LDearHenry_engine_Engine.prototype.updateSprites__D__V = (function(dt) {
  var this$1 = this.LDearHenry_engine_Engine__f_sprites;
  var i = 0;
  var top = this$1.scm_ArrayBuffer__f_size0;
  while ((i < top)) {
    var arg1 = this$1.scm_ArrayBuffer__f_array.get(i);
    var x$1 = $as_LDearHenry_engine_Sprite(arg1);
    x$1.update__D__V(dt);
    i = ((1 + i) | 0)
  }
});
$c_LDearHenry_engine_Engine.prototype.paintSprites__D__V = (function(dt) {
  var this$1 = this.LDearHenry_engine_Engine__f_sprites;
  var i = 0;
  var top = this$1.scm_ArrayBuffer__f_size0;
  while ((i < top)) {
    var arg1 = this$1.scm_ArrayBuffer__f_array.get(i);
    var sprite = $as_LDearHenry_engine_Sprite(arg1);
    sprite.paint__Lorg_scalajs_dom_CanvasRenderingContext2D__V(this.LDearHenry_engine_Engine__f_context);
    i = ((1 + i) | 0)
  }
});
$c_LDearHenry_engine_Engine.prototype.addSprite__LDearHenry_engine_Sprite__V = (function(sprite) {
  var this$3 = this.LDearHenry_engine_Engine__f_sprites;
  var array = [sprite];
  var n = $uI(array.length);
  var n$1 = ((this$3.scm_ArrayBuffer__f_size0 + n) | 0);
  $s_scm_ResizableArray$class__ensureSize__scm_ResizableArray__I__V(this$3, n$1);
  var xs = this$3.scm_ArrayBuffer__f_array;
  var start = this$3.scm_ArrayBuffer__f_size0;
  var i = 0;
  var j = start;
  var x = $uI(array.length);
  var x$1 = ((x < n) ? x : n);
  var that = ((xs.u.length - start) | 0);
  var end = ((x$1 < that) ? x$1 : that);
  while ((i < end)) {
    var $$x1 = j;
    var index = i;
    xs.set($$x1, array[index]);
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  };
  this$3.scm_ArrayBuffer__f_size0 = ((this$3.scm_ArrayBuffer__f_size0 + n) | 0)
});
$c_LDearHenry_engine_Engine.prototype.keyPressed__Lorg_scalajs_dom_KeyboardEvent__V = (function(event) {
  var x = $ct_T2__O__O__(new $c_T2(), "keyPressed", $as_T(event.key));
  var this$2 = $m_s_Console$();
  var this$3 = $as_Ljava_io_PrintStream(this$2.s_Console$__f_outVar.s_util_DynamicVariable__f_v);
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
  var keyCode = $uI(event.keyCode);
  var callback = this.LDearHenry_engine_Engine__f_keyAndListeners.get__O__s_Option(keyCode);
  if ((!callback.isEmpty__Z())) {
    $as_F1(callback.get__O()).apply__O__O(this)
  } else {
    this.defaultKeyPressedHandler__Lorg_scalajs_dom_KeyboardEvent__V(event)
  }
});
$c_LDearHenry_engine_Engine.prototype.defaultKeyPressedHandler__Lorg_scalajs_dom_KeyboardEvent__V = (function(event) {
  var array = ["unknown ", ", ", " "];
  var $$x1 = new $c_s_StringContext($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array));
  var array$1 = [$uI(event.keyCode), $as_T(event.key)];
  var x = $$x1.s__sc_Seq__T($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1));
  var this$6 = $m_s_Console$();
  var this$7 = $as_Ljava_io_PrintStream(this$6.s_Console$__f_outVar.s_util_DynamicVariable__f_v);
  this$7.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"))
});
$c_LDearHenry_engine_Engine.prototype.schedule__F0__V = (function(func) {
  var this$3 = this.LDearHenry_engine_Engine__f_scheduleQueue;
  var array = [func];
  var i = 0;
  var len = $uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    this$3.$plus$eq__O__scm_MutableList(arg1);
    i = ((1 + i) | 0)
  }
});
$c_LDearHenry_engine_Engine.prototype.alert__T__V = (function(message) {
  window.alert(message)
});
function $p_LDearHenry_engine_Engine$__uint8ToHex__I__T($thiz, v) {
  var x = ((v % 256) | 0);
  if ((x < 0)) {
    x = ((256 + x) | 0)
  };
  var x$1 = x;
  var s = $as_T($uD((x$1 >>> 0)).toString(16));
  return (($uI(s.length) === 1) ? ("0" + s) : s)
}
/** @constructor */
function $c_LDearHenry_engine_Engine$() {
  /*<skip>*/
}
$c_LDearHenry_engine_Engine$.prototype = new $h_O();
$c_LDearHenry_engine_Engine$.prototype.constructor = $c_LDearHenry_engine_Engine$;
/** @constructor */
function $h_LDearHenry_engine_Engine$() {
  /*<skip>*/
}
$h_LDearHenry_engine_Engine$.prototype = $c_LDearHenry_engine_Engine$.prototype;
$c_LDearHenry_engine_Engine$.prototype.rgbToHex__I__I__I__T = (function(r, g, b) {
  var array = ["#", "", "", ""];
  var $$x1 = new $c_s_StringContext($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array));
  var array$1 = [$p_LDearHenry_engine_Engine$__uint8ToHex__I__T(this, r), $p_LDearHenry_engine_Engine$__uint8ToHex__I__T(this, g), $p_LDearHenry_engine_Engine$__uint8ToHex__I__T(this, b)];
  return $$x1.s__sc_Seq__T($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1))
});
var $d_LDearHenry_engine_Engine$ = new $TypeData().initClass({
  LDearHenry_engine_Engine$: 0
}, false, "DearHenry.engine.Engine$", {
  LDearHenry_engine_Engine$: 1,
  O: 1
});
$c_LDearHenry_engine_Engine$.prototype.$classData = $d_LDearHenry_engine_Engine$;
var $n_LDearHenry_engine_Engine$;
function $m_LDearHenry_engine_Engine$() {
  if ((!$n_LDearHenry_engine_Engine$)) {
    $n_LDearHenry_engine_Engine$ = new $c_LDearHenry_engine_Engine$()
  };
  return $n_LDearHenry_engine_Engine$
}
function $ct_LDearHenry_engine_Sprite__T__LDearHenry_engine_Engine__($thiz, name, engine) {
  $thiz.LDearHenry_engine_Sprite__f_name = name;
  $thiz.LDearHenry_engine_Sprite__f_engine = engine;
  return $thiz
}
/** @constructor */
function $c_LDearHenry_engine_Sprite() {
  this.LDearHenry_engine_Sprite__f_name = null;
  this.LDearHenry_engine_Sprite__f_engine = null
}
$c_LDearHenry_engine_Sprite.prototype = new $h_O();
$c_LDearHenry_engine_Sprite.prototype.constructor = $c_LDearHenry_engine_Sprite;
/** @constructor */
function $h_LDearHenry_engine_Sprite() {
  /*<skip>*/
}
$h_LDearHenry_engine_Sprite.prototype = $c_LDearHenry_engine_Sprite.prototype;
function $as_LDearHenry_engine_Sprite(obj) {
  return (((obj instanceof $c_LDearHenry_engine_Sprite) || (obj === null)) ? obj : $throwClassCastException(obj, "DearHenry.engine.Sprite"))
}
function $isArrayOf_LDearHenry_engine_Sprite(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.LDearHenry_engine_Sprite)))
}
function $asArrayOf_LDearHenry_engine_Sprite(obj, depth) {
  return (($isArrayOf_LDearHenry_engine_Sprite(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "LDearHenry.engine.Sprite;", depth))
}
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_cachedSimpleName = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]))
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  this.jl_System$Streams$__f_in = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
  this.jl_System$Streams$__f_in = null
}
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
  /*<skip>*/
}
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass({
  jl_System$Streams$: 0
}, false, "java.lang.System$Streams$", {
  jl_System$Streams$: 1,
  O: 1
});
$c_jl_System$Streams$.prototype.$classData = $d_jl_System$Streams$;
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$()
  };
  return $n_jl_System$Streams$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
/** @constructor */
function $c_ju_Arrays$() {
  this.ju_Arrays$__f_inPlaceSortThreshold = 0
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.fill__AI__I__V = (function(a, value) {
  var toIndex = a.u.length;
  var i = 0;
  while ((i !== toIndex)) {
    a.set(i, value);
    i = ((1 + i) | 0)
  }
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = b.RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, b.RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? Math.clz32(bhi) : ((32 + Math.clz32(blo)) | 0)) - ((ahi !== 0) ? Math.clz32(ahi) : ((32 + Math.clz32(alo)) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    var this$3 = remLo;
    var remStr = ("" + this$3);
    var start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $$x1 = $uD((x >>> 0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0))) + $uD((compressedAbsLo >>> 0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
/** @constructor */
function $c_s_DeprecatedConsole() {
  /*<skip>*/
}
$c_s_DeprecatedConsole.prototype = new $h_O();
$c_s_DeprecatedConsole.prototype.constructor = $c_s_DeprecatedConsole;
/** @constructor */
function $h_s_DeprecatedConsole() {
  /*<skip>*/
}
$h_s_DeprecatedConsole.prototype = $c_s_DeprecatedConsole.prototype;
/** @constructor */
function $c_s_FallbackArrayBuilding() {
  /*<skip>*/
}
$c_s_FallbackArrayBuilding.prototype = new $h_O();
$c_s_FallbackArrayBuilding.prototype.constructor = $c_s_FallbackArrayBuilding;
/** @constructor */
function $h_s_FallbackArrayBuilding() {
  /*<skip>*/
}
$h_s_FallbackArrayBuilding.prototype = $c_s_FallbackArrayBuilding.prototype;
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)))
}
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"))
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)))
}
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth))
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits.prototype = new $h_O();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
/** @constructor */
function $c_s_Predef$any2stringadd$() {
  /*<skip>*/
}
$c_s_Predef$any2stringadd$.prototype = new $h_O();
$c_s_Predef$any2stringadd$.prototype.constructor = $c_s_Predef$any2stringadd$;
/** @constructor */
function $h_s_Predef$any2stringadd$() {
  /*<skip>*/
}
$h_s_Predef$any2stringadd$.prototype = $c_s_Predef$any2stringadd$.prototype;
$c_s_Predef$any2stringadd$.prototype.$plus$extension__O__T__T = (function(this$, other) {
  return (("" + this$) + other)
});
var $d_s_Predef$any2stringadd$ = new $TypeData().initClass({
  s_Predef$any2stringadd$: 0
}, false, "scala.Predef$any2stringadd$", {
  s_Predef$any2stringadd$: 1,
  O: 1
});
$c_s_Predef$any2stringadd$.prototype.$classData = $d_s_Predef$any2stringadd$;
var $n_s_Predef$any2stringadd$;
function $m_s_Predef$any2stringadd$() {
  if ((!$n_s_Predef$any2stringadd$)) {
    $n_s_Predef$any2stringadd$ = new $c_s_Predef$any2stringadd$()
  };
  return $n_s_Predef$any2stringadd$
}
function $s_s_Product2$class__productElement__s_Product2__I__O(this$, n) {
  switch (n) {
    case 0: {
      return this$._1__O();
      break
    }
    case 1: {
      return this$._2__O();
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
}
function $s_s_Product4$class__productElement__s_Product4__I__O(this$, n) {
  switch (n) {
    case 0: {
      return this$.T4__f__1;
      break
    }
    case 1: {
      return this$.T4__f__2;
      break
    }
    case 2: {
      return this$.T4__f__3;
      break
    }
    case 3: {
      return this$.T4__f__4;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
}
function $s_s_Proxy$class__equals__s_Proxy__O__Z(this$, that) {
  return ((that !== null) && (((that === this$) || (that === this$.scm_Builder$$anon$1__f_self)) || $dp_equals__O__Z(that, this$.scm_Builder$$anon$1__f_self)))
}
function $s_s_Proxy$class__toString__s_Proxy__T(this$) {
  return ("" + this$.scm_Builder$$anon$1__f_self)
}
/** @constructor */
function $c_sc_$colon$plus$() {
  /*<skip>*/
}
$c_sc_$colon$plus$.prototype = new $h_O();
$c_sc_$colon$plus$.prototype.constructor = $c_sc_$colon$plus$;
/** @constructor */
function $h_sc_$colon$plus$() {
  /*<skip>*/
}
$h_sc_$colon$plus$.prototype = $c_sc_$colon$plus$.prototype;
var $d_sc_$colon$plus$ = new $TypeData().initClass({
  sc_$colon$plus$: 0
}, false, "scala.collection.$colon$plus$", {
  sc_$colon$plus$: 1,
  O: 1
});
$c_sc_$colon$plus$.prototype.$classData = $d_sc_$colon$plus$;
var $n_sc_$colon$plus$;
function $m_sc_$colon$plus$() {
  if ((!$n_sc_$colon$plus$)) {
    $n_sc_$colon$plus$ = new $c_sc_$colon$plus$()
  };
  return $n_sc_$colon$plus$
}
/** @constructor */
function $c_sc_$plus$colon$() {
  /*<skip>*/
}
$c_sc_$plus$colon$.prototype = new $h_O();
$c_sc_$plus$colon$.prototype.constructor = $c_sc_$plus$colon$;
/** @constructor */
function $h_sc_$plus$colon$() {
  /*<skip>*/
}
$h_sc_$plus$colon$.prototype = $c_sc_$plus$colon$.prototype;
var $d_sc_$plus$colon$ = new $TypeData().initClass({
  sc_$plus$colon$: 0
}, false, "scala.collection.$plus$colon$", {
  sc_$plus$colon$: 1,
  O: 1
});
$c_sc_$plus$colon$.prototype.$classData = $d_sc_$plus$colon$;
var $n_sc_$plus$colon$;
function $m_sc_$plus$colon$() {
  if ((!$n_sc_$plus$colon$)) {
    $n_sc_$plus$colon$ = new $c_sc_$plus$colon$()
  };
  return $n_sc_$plus$colon$
}
function $s_sc_GenMapLike$class__equals__sc_GenMapLike__O__Z(this$, that) {
  if ($is_sc_GenMap(that)) {
    var x2 = $as_sc_GenMap(that);
    return ((this$ === x2) || ((this$.scm_HashMap__f_tableSize === x2.scm_HashMap__f_tableSize) && $ps_sc_GenMapLike$class__liftedTree1$1__sc_GenMapLike__sc_GenMap__Z(this$, x2)))
  } else {
    return false
  }
}
function $ps_sc_GenMapLike$class__liftedTree1$1__sc_GenMapLike__sc_GenMap__Z(this$, x2$1) {
  try {
    var this$1 = this$.iterator__sc_Iterator();
    var res = true;
    while ((res && this$1.hasNext__Z())) {
      var arg1 = this$1.next__O();
      var x0$1 = $as_T2(arg1);
      if ((x0$1 === null)) {
        throw new $c_s_MatchError(x0$1)
      };
      var k = x0$1._1__O();
      var v = x0$1._2__O();
      var x1$2 = x2$1.get__O__s_Option(k);
      matchEnd6: {
        if ((x1$2 instanceof $c_s_Some)) {
          var x2 = $as_s_Some(x1$2);
          var p3 = x2.s_Some__f_x;
          if ($m_sr_BoxesRunTime$().equals__O__O__Z(v, p3)) {
            res = true;
            break matchEnd6
          }
        };
        res = false
      }
    };
    return res
  } catch (e) {
    if ((e instanceof $c_jl_ClassCastException)) {
      $as_jl_ClassCastException(e);
      return false
    } else {
      throw e
    }
  }
}
function $s_sc_GenSeqLike$class__equals__sc_GenSeqLike__O__Z(this$, that) {
  if ($is_sc_GenSeq(that)) {
    var x2 = $as_sc_GenSeq(that);
    return this$.sameElements__sc_GenIterable__Z(x2)
  } else {
    return false
  }
}
function $s_sc_GenSetLike$class__equals__sc_GenSetLike__O__Z(this$, that) {
  if ($is_sc_GenSet(that)) {
    var x2 = $as_sc_GenSet(that);
    return ((this$ === x2) || ((this$.size__I() === x2.size__I()) && $ps_sc_GenSetLike$class__liftedTree1$1__sc_GenSetLike__sc_GenSet__Z(this$, x2)))
  } else {
    return false
  }
}
function $ps_sc_GenSetLike$class__liftedTree1$1__sc_GenSetLike__sc_GenSet__Z(this$, x2$1) {
  try {
    return this$.subsetOf__sc_GenSet__Z(x2$1)
  } catch (e) {
    if ((e instanceof $c_jl_ClassCastException)) {
      $as_jl_ClassCastException(e);
      return false
    } else {
      throw e
    }
  }
}
function $is_sc_GenTraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversableOnce)))
}
function $as_sc_GenTraversableOnce(obj) {
  return (($is_sc_GenTraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversableOnce"))
}
function $isArrayOf_sc_GenTraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversableOnce)))
}
function $asArrayOf_sc_GenTraversableOnce(obj, depth) {
  return (($isArrayOf_sc_GenTraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversableOnce;", depth))
}
function $s_sc_IndexedSeqOptimized$class__isEmpty__sc_IndexedSeqOptimized__Z(this$) {
  return (this$.length__I() === 0)
}
function $s_sc_IndexedSeqOptimized$class__foreach__sc_IndexedSeqOptimized__F1__V(this$, f) {
  var i = 0;
  var len = this$.length__I();
  while ((i < len)) {
    f.apply__O__O(this$.apply__I__O(i));
    i = ((1 + i) | 0)
  }
}
function $s_sc_IndexedSeqOptimized$class__sameElements__sc_IndexedSeqOptimized__sc_GenIterable__Z(this$, that) {
  if ($is_sc_IndexedSeq(that)) {
    var x2 = $as_sc_IndexedSeq(that);
    var len = this$.length__I();
    if ((len === x2.length__I())) {
      var i = 0;
      while (((i < len) && $m_sr_BoxesRunTime$().equals__O__O__Z(this$.apply__I__O(i), x2.apply__I__O(i)))) {
        i = ((1 + i) | 0)
      };
      return (i === len)
    } else {
      return false
    }
  } else {
    return $s_sc_IterableLike$class__sameElements__sc_IterableLike__sc_GenIterable__Z(this$, that)
  }
}
function $s_sc_IndexedSeqOptimized$class__copyToArray__sc_IndexedSeqOptimized__O__I__I__V(this$, xs, start, len) {
  var i = 0;
  var j = start;
  var x = this$.length__I();
  var x$1 = ((x < len) ? x : len);
  var that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  var end = ((x$1 < that) ? x$1 : that);
  while ((i < end)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, j, this$.apply__I__O(i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
function $s_sc_IndexedSeqOptimized$class__lengthCompare__sc_IndexedSeqOptimized__I__I(this$, len) {
  return ((this$.length__I() - len) | 0)
}
function $s_sc_IterableLike$class__take__sc_IterableLike__I__O(this$, n) {
  var b = this$.newBuilder__scm_Builder();
  if ((n <= 0)) {
    return b.result__O()
  } else {
    b.sizeHintBounded__I__sc_TraversableLike__V(n, this$);
    var i = 0;
    var it = this$.iterator__sc_Iterator();
    while (((i < n) && it.hasNext__Z())) {
      b.$plus$eq__O__scm_Builder(it.next__O());
      i = ((1 + i) | 0)
    };
    return b.result__O()
  }
}
function $s_sc_IterableLike$class__copyToArray__sc_IterableLike__O__I__I__V(this$, xs, start, len) {
  var i = start;
  var x = ((start + len) | 0);
  var that = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  var end = ((x < that) ? x : that);
  var it = this$.iterator__sc_Iterator();
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  }
}
function $s_sc_IterableLike$class__sameElements__sc_IterableLike__sc_GenIterable__Z(this$, that) {
  var these = this$.iterator__sc_Iterator();
  var those = that.iterator__sc_Iterator();
  while ((these.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(these.next__O(), those.next__O()))) {
      return false
    }
  };
  return ((!these.hasNext__Z()) && (!those.hasNext__Z()))
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_empty = new $c_sc_Iterator$$anon$2()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
function $s_sc_Iterator$class__foreach__sc_Iterator__F1__V(this$, f) {
  while (this$.hasNext__Z()) {
    f.apply__O__O(this$.next__O())
  }
}
function $s_sc_Iterator$class__forall__sc_Iterator__F1__Z(this$, p) {
  var res = true;
  while ((res && this$.hasNext__Z())) {
    res = $uZ(p.apply__O__O(this$.next__O()))
  };
  return res
}
function $s_sc_Iterator$class__toStream__sc_Iterator__sci_Stream(this$) {
  if (this$.hasNext__Z()) {
    var hd = this$.next__O();
    var tl = new $c_sjsr_AnonFunction0(((this$$1) => (() => this$$1.toStream__sci_Stream()))(this$));
    return new $c_sci_Stream$Cons(hd, tl)
  } else {
    $m_sci_Stream$();
    return $m_sci_Stream$Empty$()
  }
}
function $s_sc_Iterator$class__toString__sc_Iterator__T(this$) {
  return ((this$.hasNext__Z() ? "non-empty" : "empty") + " iterator")
}
function $s_sc_LinearSeqOptimized$class__length__sc_LinearSeqOptimized__I(this$) {
  var these = this$;
  var len = 0;
  while ((!these.isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return len
}
function $s_sc_LinearSeqOptimized$class__apply__sc_LinearSeqOptimized__I__O(this$, n) {
  var rest = this$.drop__I__sc_LinearSeqOptimized(n);
  if (((n < 0) || rest.isEmpty__Z())) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return rest.head__O()
}
function $s_sc_LinearSeqOptimized$class__foreach__sc_LinearSeqOptimized__F1__V(this$, f) {
  var these = this$;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  }
}
function $s_sc_LinearSeqOptimized$class__last__sc_LinearSeqOptimized__O(this$) {
  if (this$.isEmpty__Z()) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  };
  var these = this$;
  var nx = $as_sc_LinearSeqOptimized(these.tail__O());
  while ((!nx.isEmpty__Z())) {
    these = nx;
    nx = $as_sc_LinearSeqOptimized(nx.tail__O())
  };
  return these.head__O()
}
function $s_sc_LinearSeqOptimized$class__drop__sc_LinearSeqOptimized__I__sc_LinearSeqOptimized(this$, n) {
  var these = $as_sc_LinearSeqOptimized(this$);
  var count = n;
  while (((!these.isEmpty__Z()) && (count > 0))) {
    these = $as_sc_LinearSeqOptimized(these.tail__O());
    count = (((-1) + count) | 0)
  };
  return these
}
function $s_sc_LinearSeqOptimized$class__sameElements__sc_LinearSeqOptimized__sc_GenIterable__Z(this$, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    if ((this$ === x2)) {
      return true
    } else {
      var these = this$;
      var those = x2;
      while ((((!these.isEmpty__Z()) && (!those.isEmpty__Z())) && $m_sr_BoxesRunTime$().equals__O__O__Z(these.head__O(), those.head__O()))) {
        these = $as_sc_LinearSeqOptimized(these.tail__O());
        those = $as_sc_LinearSeq(those.tail__O())
      };
      return (these.isEmpty__Z() && those.isEmpty__Z())
    }
  } else {
    return $s_sc_IterableLike$class__sameElements__sc_IterableLike__sc_GenIterable__Z(this$, that)
  }
}
function $s_sc_LinearSeqOptimized$class__lengthCompare__sc_LinearSeqOptimized__I__I(this$, len) {
  return ((len < 0) ? 1 : $ps_sc_LinearSeqOptimized$class__loop$1__sc_LinearSeqOptimized__I__sc_LinearSeqOptimized__I__I(this$, 0, this$, len))
}
function $ps_sc_LinearSeqOptimized$class__loop$1__sc_LinearSeqOptimized__I__sc_LinearSeqOptimized__I__I(this$, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeqOptimized(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $s_sc_MapLike$class__isEmpty__sc_MapLike__Z(this$) {
  return (this$.scm_HashMap__f_tableSize === 0)
}
function $s_sc_MapLike$class__default__sc_MapLike__O__O(this$, key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
}
function $s_sc_MapLike$class__addString__sc_MapLike__scm_StringBuilder__T__T__T__scm_StringBuilder(this$, b, start, sep, end) {
  var this$2 = this$.iterator__sc_Iterator();
  var f = new $c_sjsr_AnonFunction1(((this$$1) => ((x0$1$2) => {
    var x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      var k = x0$1._1__O();
      var v = x0$1._2__O();
      return (("" + $m_s_Predef$any2stringadd$().$plus$extension__O__T__T(k, " -> ")) + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }))(this$));
  var this$3 = new $c_sc_Iterator$$anon$11(this$2, f);
  return $s_sc_TraversableOnce$class__addString__sc_TraversableOnce__scm_StringBuilder__T__T__T__scm_StringBuilder(this$3, b, start, sep, end)
}
function $s_sc_SeqLike$class__lengthCompare__sc_SeqLike__I__I(this$, len) {
  if ((len < 0)) {
    return 1
  } else {
    var i = 0;
    var it = this$.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      if ((i === len)) {
        return (it.hasNext__Z() ? 1 : 0)
      };
      it.next__O();
      i = ((1 + i) | 0)
    };
    return ((i - len) | 0)
  }
}
function $s_sc_SeqLike$class__isEmpty__sc_SeqLike__Z(this$) {
  return (this$.lengthCompare__I__I(0) === 0)
}
function $s_sc_SeqLike$class__reverse__sc_SeqLike__O(this$) {
  var elem = $m_sci_Nil$();
  var xs = new $c_sr_ObjectRef(elem);
  this$.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$$1, xs$1) => ((x$2) => {
    var this$2 = $as_sci_List(xs$1.sr_ObjectRef__f_elem);
    xs$1.sr_ObjectRef__f_elem = new $c_sci_$colon$colon(x$2, this$2)
  }))(this$, xs)));
  var b = this$.newBuilder__scm_Builder();
  $s_scm_Builder$class__sizeHint__scm_Builder__sc_TraversableLike__V(b, this$);
  var this$3 = $as_sci_List(xs.sr_ObjectRef__f_elem);
  var these = this$3;
  while ((!these.isEmpty__Z())) {
    var arg1 = these.head__O();
    b.$plus$eq__O__scm_Builder(arg1);
    var this$4 = these;
    these = this$4.tail__sci_List()
  };
  return b.result__O()
}
function $s_sc_SeqLike$class__indices__sc_SeqLike__sci_Range(this$) {
  var end = this$.length__I();
  return $ct_sci_Range__I__I__I__(new $c_sci_Range(), 0, end, 1)
}
function $s_sc_SetLike$class__isEmpty__sc_SetLike__Z(this$) {
  return (this$.size__I() === 0)
}
function $s_sc_TraversableLike$class__flatMap__sc_TraversableLike__F1__scg_CanBuildFrom__O(this$, f, bf) {
  var b = bf.apply__O__scm_Builder(this$.repr__O());
  this$.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$$1, b$1, f$1) => ((x$2) => $as_scm_Builder(b$1.$plus$plus$eq__sc_TraversableOnce__scg_Growable($as_sc_GenTraversableOnce(f$1.apply__O__O(x$2)).seq__sc_TraversableOnce()))))(this$, b, f)));
  return b.result__O()
}
function $s_sc_TraversableLike$class__to__sc_TraversableLike__scg_CanBuildFrom__O(this$, cbf) {
  var b = cbf.apply__scm_Builder();
  $s_scm_Builder$class__sizeHint__scm_Builder__sc_TraversableLike__V(b, this$);
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable(this$.thisCollection__sc_Traversable());
  return b.result__O()
}
function $s_sc_TraversableLike$class__toString__sc_TraversableLike__T(this$) {
  return this$.mkString__T__T__T__T((this$.stringPrefix__T() + "("), ", ", ")")
}
function $s_sc_TraversableLike$class__stringPrefix__sc_TraversableLike__T(this$) {
  var this$1 = this$.repr__O();
  var string = $objectClassName(this$1);
  var idx1 = $f_T__lastIndexOf__I__I(string, 46);
  if ((idx1 !== (-1))) {
    var this$2 = string;
    var beginIndex = ((1 + idx1) | 0);
    string = $as_T(this$2.substring(beginIndex))
  };
  var idx2 = $f_T__indexOf__I__I(string, 36);
  if ((idx2 !== (-1))) {
    var this$4 = string;
    string = $as_T(this$4.substring(0, idx2))
  };
  return string
}
function $ps_sc_TraversableLike$class__builder$1__sc_TraversableLike__scg_CanBuildFrom__scm_Builder(this$, bf$1) {
  var b = bf$1.apply__O__scm_Builder(this$.repr__O());
  $s_scm_Builder$class__sizeHint__scm_Builder__sc_TraversableLike__V(b, this$);
  return b
}
function $s_sc_TraversableOnce$class__mkString__sc_TraversableOnce__T__T__T__T(this$, start, sep, end) {
  var this$1 = this$.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
  return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
}
function $s_sc_TraversableOnce$class__addString__sc_TraversableOnce__scm_StringBuilder__T__T__T__scm_StringBuilder(this$, b, start, sep, end) {
  var first = new $c_sr_BooleanRef(true);
  b.append__T__scm_StringBuilder(start);
  this$.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$$1, first$1, b$1, sep$1) => ((x$2) => {
    if (first$1.sr_BooleanRef__f_elem) {
      b$1.append__O__scm_StringBuilder(x$2);
      first$1.sr_BooleanRef__f_elem = false;
      return (void 0)
    } else {
      b$1.append__T__scm_StringBuilder(sep$1);
      return b$1.append__O__scm_StringBuilder(x$2)
    }
  }))(this$, first, b, sep)));
  b.append__T__scm_StringBuilder(end);
  return b
}
/** @constructor */
function $c_scg_GenMapFactory() {
  /*<skip>*/
}
$c_scg_GenMapFactory.prototype = new $h_O();
$c_scg_GenMapFactory.prototype.constructor = $c_scg_GenMapFactory;
/** @constructor */
function $h_scg_GenMapFactory() {
  /*<skip>*/
}
$h_scg_GenMapFactory.prototype = $c_scg_GenMapFactory.prototype;
/** @constructor */
function $c_scg_GenericCompanion() {
  /*<skip>*/
}
$c_scg_GenericCompanion.prototype = new $h_O();
$c_scg_GenericCompanion.prototype.constructor = $c_scg_GenericCompanion;
/** @constructor */
function $h_scg_GenericCompanion() {
  /*<skip>*/
}
$h_scg_GenericCompanion.prototype = $c_scg_GenericCompanion.prototype;
function $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this$, xs) {
  if ($is_sc_LinearSeq(xs)) {
    var x2 = $as_sc_LinearSeq(xs);
    $ps_scg_Growable$class__loop$1__scg_Growable__sc_LinearSeq__V(this$, x2)
  } else {
    xs.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$$1) => ((elem$2) => this$$1.$plus$eq__O__scg_Growable(elem$2)))(this$)))
  };
  return this$
}
function $ps_scg_Growable$class__loop$1__scg_Growable__sc_LinearSeq__V(this$, xs) {
  while (true) {
    var this$1 = xs;
    if ((!this$1.isEmpty__Z())) {
      this$.$plus$eq__O__scg_Growable(xs.head__O());
      xs = $as_sc_LinearSeq(xs.tail__O())
    } else {
      break
    }
  }
}
/** @constructor */
function $c_sci_Stream$$hash$colon$colon$() {
  /*<skip>*/
}
$c_sci_Stream$$hash$colon$colon$.prototype = new $h_O();
$c_sci_Stream$$hash$colon$colon$.prototype.constructor = $c_sci_Stream$$hash$colon$colon$;
/** @constructor */
function $h_sci_Stream$$hash$colon$colon$() {
  /*<skip>*/
}
$h_sci_Stream$$hash$colon$colon$.prototype = $c_sci_Stream$$hash$colon$colon$.prototype;
var $d_sci_Stream$$hash$colon$colon$ = new $TypeData().initClass({
  sci_Stream$$hash$colon$colon$: 0
}, false, "scala.collection.immutable.Stream$$hash$colon$colon$", {
  sci_Stream$$hash$colon$colon$: 1,
  O: 1
});
$c_sci_Stream$$hash$colon$colon$.prototype.$classData = $d_sci_Stream$$hash$colon$colon$;
var $n_sci_Stream$$hash$colon$colon$;
function $m_sci_Stream$$hash$colon$colon$() {
  if ((!$n_sci_Stream$$hash$colon$colon$)) {
    $n_sci_Stream$$hash$colon$colon$ = new $c_sci_Stream$$hash$colon$colon$()
  };
  return $n_sci_Stream$$hash$colon$colon$
}
function $p_sci_StreamIterator$LazyCell__v$lzycompute__sci_Stream($thiz) {
  if ((!$thiz.sci_StreamIterator$LazyCell__f_bitmap$0)) {
    $thiz.sci_StreamIterator$LazyCell__f_v = $as_sci_Stream($thiz.sci_StreamIterator$LazyCell__f_st.apply__O());
    $thiz.sci_StreamIterator$LazyCell__f_bitmap$0 = true
  };
  $thiz.sci_StreamIterator$LazyCell__f_st = null;
  return $thiz.sci_StreamIterator$LazyCell__f_v
}
/** @constructor */
function $c_sci_StreamIterator$LazyCell(outer, st) {
  this.sci_StreamIterator$LazyCell__f_st = null;
  this.sci_StreamIterator$LazyCell__f_v = null;
  this.sci_StreamIterator$LazyCell__f_$outer = null;
  this.sci_StreamIterator$LazyCell__f_bitmap$0 = false;
  this.sci_StreamIterator$LazyCell__f_st = st;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sci_StreamIterator$LazyCell__f_$outer = outer
  }
}
$c_sci_StreamIterator$LazyCell.prototype = new $h_O();
$c_sci_StreamIterator$LazyCell.prototype.constructor = $c_sci_StreamIterator$LazyCell;
/** @constructor */
function $h_sci_StreamIterator$LazyCell() {
  /*<skip>*/
}
$h_sci_StreamIterator$LazyCell.prototype = $c_sci_StreamIterator$LazyCell.prototype;
$c_sci_StreamIterator$LazyCell.prototype.v__sci_Stream = (function() {
  return ((!this.sci_StreamIterator$LazyCell__f_bitmap$0) ? $p_sci_StreamIterator$LazyCell__v$lzycompute__sci_Stream(this) : this.sci_StreamIterator$LazyCell__f_v)
});
var $d_sci_StreamIterator$LazyCell = new $TypeData().initClass({
  sci_StreamIterator$LazyCell: 0
}, false, "scala.collection.immutable.StreamIterator$LazyCell", {
  sci_StreamIterator$LazyCell: 1,
  O: 1
});
$c_sci_StreamIterator$LazyCell.prototype.$classData = $d_sci_StreamIterator$LazyCell;
function $s_sci_VectorPointer$class__initFrom__sci_VectorPointer__sci_VectorPointer__I__V(this$, that, depth) {
  this$.depth_$eq__I__V(depth);
  var x1 = (((-1) + depth) | 0);
  switch (x1) {
    case (-1): {
      break
    }
    case 0: {
      this$.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 1: {
      this$.display1_$eq__AO__V(that.display1__AO());
      this$.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 2: {
      this$.display2_$eq__AO__V(that.display2__AO());
      this$.display1_$eq__AO__V(that.display1__AO());
      this$.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 3: {
      this$.display3_$eq__AO__V(that.display3__AO());
      this$.display2_$eq__AO__V(that.display2__AO());
      this$.display1_$eq__AO__V(that.display1__AO());
      this$.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 4: {
      this$.display4_$eq__AO__V(that.display4__AO());
      this$.display3_$eq__AO__V(that.display3__AO());
      this$.display2_$eq__AO__V(that.display2__AO());
      this$.display1_$eq__AO__V(that.display1__AO());
      this$.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 5: {
      this$.display5_$eq__AO__V(that.display5__AO());
      this$.display4_$eq__AO__V(that.display4__AO());
      this$.display3_$eq__AO__V(that.display3__AO());
      this$.display2_$eq__AO__V(that.display2__AO());
      this$.display1_$eq__AO__V(that.display1__AO());
      this$.display0_$eq__AO__V(that.display0__AO());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $s_sci_VectorPointer$class__getElem__sci_VectorPointer__I__I__O(this$, index, xor) {
  if ((xor < 32)) {
    return this$.display0__AO().get((31 & index))
  } else if ((xor < 1024)) {
    return $asArrayOf_O(this$.display1__AO().get((31 & (index >> 5))), 1).get((31 & index))
  } else if ((xor < 32768)) {
    return $asArrayOf_O($asArrayOf_O(this$.display2__AO().get((31 & (index >> 10))), 1).get((31 & (index >> 5))), 1).get((31 & index))
  } else if ((xor < 1048576)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O(this$.display3__AO().get((31 & (index >> 15))), 1).get((31 & (index >> 10))), 1).get((31 & (index >> 5))), 1).get((31 & index))
  } else if ((xor < 33554432)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O(this$.display4__AO().get((31 & (index >> 20))), 1).get((31 & (index >> 15))), 1).get((31 & (index >> 10))), 1).get((31 & (index >> 5))), 1).get((31 & index))
  } else if ((xor < 1073741824)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O(this$.display5__AO().get((31 & (index >> 25))), 1).get((31 & (index >> 20))), 1).get((31 & (index >> 15))), 1).get((31 & (index >> 10))), 1).get((31 & (index >> 5))), 1).get((31 & index))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $s_sci_VectorPointer$class__gotoPos__sci_VectorPointer__I__I__V(this$, index, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get((31 & (index >> 5))), 1))
    } else if ((xor < 32768)) {
      this$.display1_$eq__AO__V($asArrayOf_O(this$.display2__AO().get((31 & (index >> 10))), 1));
      this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get((31 & (index >> 5))), 1))
    } else if ((xor < 1048576)) {
      this$.display2_$eq__AO__V($asArrayOf_O(this$.display3__AO().get((31 & (index >> 15))), 1));
      this$.display1_$eq__AO__V($asArrayOf_O(this$.display2__AO().get((31 & (index >> 10))), 1));
      this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get((31 & (index >> 5))), 1))
    } else if ((xor < 33554432)) {
      this$.display3_$eq__AO__V($asArrayOf_O(this$.display4__AO().get((31 & (index >> 20))), 1));
      this$.display2_$eq__AO__V($asArrayOf_O(this$.display3__AO().get((31 & (index >> 15))), 1));
      this$.display1_$eq__AO__V($asArrayOf_O(this$.display2__AO().get((31 & (index >> 10))), 1));
      this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get((31 & (index >> 5))), 1))
    } else if ((xor < 1073741824)) {
      this$.display4_$eq__AO__V($asArrayOf_O(this$.display5__AO().get((31 & (index >> 25))), 1));
      this$.display3_$eq__AO__V($asArrayOf_O(this$.display4__AO().get((31 & (index >> 20))), 1));
      this$.display2_$eq__AO__V($asArrayOf_O(this$.display3__AO().get((31 & (index >> 15))), 1));
      this$.display1_$eq__AO__V($asArrayOf_O(this$.display2__AO().get((31 & (index >> 10))), 1));
      this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get((31 & (index >> 5))), 1))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
}
function $s_sci_VectorPointer$class__gotoNextBlockStart__sci_VectorPointer__I__I__V(this$, index, xor) {
  if ((xor < 1024)) {
    this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get((31 & (index >> 5))), 1))
  } else if ((xor < 32768)) {
    this$.display1_$eq__AO__V($asArrayOf_O(this$.display2__AO().get((31 & (index >> 10))), 1));
    this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get(0), 1))
  } else if ((xor < 1048576)) {
    this$.display2_$eq__AO__V($asArrayOf_O(this$.display3__AO().get((31 & (index >> 15))), 1));
    this$.display1_$eq__AO__V($asArrayOf_O(this$.display2__AO().get(0), 1));
    this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get(0), 1))
  } else if ((xor < 33554432)) {
    this$.display3_$eq__AO__V($asArrayOf_O(this$.display4__AO().get((31 & (index >> 20))), 1));
    this$.display2_$eq__AO__V($asArrayOf_O(this$.display3__AO().get(0), 1));
    this$.display1_$eq__AO__V($asArrayOf_O(this$.display2__AO().get(0), 1));
    this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get(0), 1))
  } else if ((xor < 1073741824)) {
    this$.display4_$eq__AO__V($asArrayOf_O(this$.display5__AO().get((31 & (index >> 25))), 1));
    this$.display3_$eq__AO__V($asArrayOf_O(this$.display4__AO().get(0), 1));
    this$.display2_$eq__AO__V($asArrayOf_O(this$.display3__AO().get(0), 1));
    this$.display1_$eq__AO__V($asArrayOf_O(this$.display2__AO().get(0), 1));
    this$.display0_$eq__AO__V($asArrayOf_O(this$.display1__AO().get(0), 1))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $s_sci_VectorPointer$class__gotoNextBlockStartWritable__sci_VectorPointer__I__I__V(this$, index, xor) {
  if ((xor < 1024)) {
    if ((this$.depth__I() === 1)) {
      this$.display1_$eq__AO__V(new $ac_O(32));
      this$.display1__AO().set(0, this$.display0__AO());
      this$.depth_$eq__I__V(((1 + this$.depth__I()) | 0))
    };
    this$.display0_$eq__AO__V(new $ac_O(32));
    this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO())
  } else if ((xor < 32768)) {
    if ((this$.depth__I() === 2)) {
      this$.display2_$eq__AO__V(new $ac_O(32));
      this$.display2__AO().set(0, this$.display1__AO());
      this$.depth_$eq__I__V(((1 + this$.depth__I()) | 0))
    };
    this$.display0_$eq__AO__V(new $ac_O(32));
    this$.display1_$eq__AO__V(new $ac_O(32));
    this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
    this$.display2__AO().set((31 & (index >> 10)), this$.display1__AO())
  } else if ((xor < 1048576)) {
    if ((this$.depth__I() === 3)) {
      this$.display3_$eq__AO__V(new $ac_O(32));
      this$.display3__AO().set(0, this$.display2__AO());
      this$.depth_$eq__I__V(((1 + this$.depth__I()) | 0))
    };
    this$.display0_$eq__AO__V(new $ac_O(32));
    this$.display1_$eq__AO__V(new $ac_O(32));
    this$.display2_$eq__AO__V(new $ac_O(32));
    this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
    this$.display2__AO().set((31 & (index >> 10)), this$.display1__AO());
    this$.display3__AO().set((31 & (index >> 15)), this$.display2__AO())
  } else if ((xor < 33554432)) {
    if ((this$.depth__I() === 4)) {
      this$.display4_$eq__AO__V(new $ac_O(32));
      this$.display4__AO().set(0, this$.display3__AO());
      this$.depth_$eq__I__V(((1 + this$.depth__I()) | 0))
    };
    this$.display0_$eq__AO__V(new $ac_O(32));
    this$.display1_$eq__AO__V(new $ac_O(32));
    this$.display2_$eq__AO__V(new $ac_O(32));
    this$.display3_$eq__AO__V(new $ac_O(32));
    this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
    this$.display2__AO().set((31 & (index >> 10)), this$.display1__AO());
    this$.display3__AO().set((31 & (index >> 15)), this$.display2__AO());
    this$.display4__AO().set((31 & (index >> 20)), this$.display3__AO())
  } else if ((xor < 1073741824)) {
    if ((this$.depth__I() === 5)) {
      this$.display5_$eq__AO__V(new $ac_O(32));
      this$.display5__AO().set(0, this$.display4__AO());
      this$.depth_$eq__I__V(((1 + this$.depth__I()) | 0))
    };
    this$.display0_$eq__AO__V(new $ac_O(32));
    this$.display1_$eq__AO__V(new $ac_O(32));
    this$.display2_$eq__AO__V(new $ac_O(32));
    this$.display3_$eq__AO__V(new $ac_O(32));
    this$.display4_$eq__AO__V(new $ac_O(32));
    this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
    this$.display2__AO().set((31 & (index >> 10)), this$.display1__AO());
    this$.display3__AO().set((31 & (index >> 15)), this$.display2__AO());
    this$.display4__AO().set((31 & (index >> 20)), this$.display3__AO());
    this$.display5__AO().set((31 & (index >> 25)), this$.display4__AO())
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a) {
  var b = new $ac_O(a.u.length);
  var length = a.u.length;
  a.copyTo(0, b, 0, length);
  return b
}
function $s_sci_VectorPointer$class__stabilize__sci_VectorPointer__I__V(this$, index) {
  var x1 = (((-1) + this$.depth__I()) | 0);
  switch (x1) {
    case 5: {
      var a = this$.display5__AO();
      this$.display5_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a));
      var a$1 = this$.display4__AO();
      this$.display4_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$1));
      var a$2 = this$.display3__AO();
      this$.display3_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$2));
      var a$3 = this$.display2__AO();
      this$.display2_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$3));
      var a$4 = this$.display1__AO();
      this$.display1_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$4));
      this$.display5__AO().set((31 & (index >> 25)), this$.display4__AO());
      this$.display4__AO().set((31 & (index >> 20)), this$.display3__AO());
      this$.display3__AO().set((31 & (index >> 15)), this$.display2__AO());
      this$.display2__AO().set((31 & (index >> 10)), this$.display1__AO());
      this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
      break
    }
    case 4: {
      var a$5 = this$.display4__AO();
      this$.display4_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$5));
      var a$6 = this$.display3__AO();
      this$.display3_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$6));
      var a$7 = this$.display2__AO();
      this$.display2_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$7));
      var a$8 = this$.display1__AO();
      this$.display1_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$8));
      this$.display4__AO().set((31 & (index >> 20)), this$.display3__AO());
      this$.display3__AO().set((31 & (index >> 15)), this$.display2__AO());
      this$.display2__AO().set((31 & (index >> 10)), this$.display1__AO());
      this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
      break
    }
    case 3: {
      var a$9 = this$.display3__AO();
      this$.display3_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$9));
      var a$10 = this$.display2__AO();
      this$.display2_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$10));
      var a$11 = this$.display1__AO();
      this$.display1_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$11));
      this$.display3__AO().set((31 & (index >> 15)), this$.display2__AO());
      this$.display2__AO().set((31 & (index >> 10)), this$.display1__AO());
      this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
      break
    }
    case 2: {
      var a$12 = this$.display2__AO();
      this$.display2_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$12));
      var a$13 = this$.display1__AO();
      this$.display1_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$13));
      this$.display2__AO().set((31 & (index >> 10)), this$.display1__AO());
      this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
      break
    }
    case 1: {
      var a$14 = this$.display1__AO();
      this$.display1_$eq__AO__V($s_sci_VectorPointer$class__copyOf__sci_VectorPointer__AO__AO(this$, a$14));
      this$.display1__AO().set((31 & (index >> 5)), this$.display0__AO());
      break
    }
    case 0: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $s_scm_Builder$class__sizeHint__scm_Builder__sc_TraversableLike__V(this$, coll) {
  if ($is_sc_IndexedSeqLike(coll)) {
    this$.sizeHint__I__V(coll.size__I())
  }
}
function $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this$, size, boundingColl) {
  if ($is_sc_IndexedSeqLike(boundingColl)) {
    var that = boundingColl.size__I();
    this$.sizeHint__I__V(((size < that) ? size : that))
  }
}
/** @constructor */
function $c_scm_FlatHashTable$() {
  /*<skip>*/
}
$c_scm_FlatHashTable$.prototype = new $h_O();
$c_scm_FlatHashTable$.prototype.constructor = $c_scm_FlatHashTable$;
/** @constructor */
function $h_scm_FlatHashTable$() {
  /*<skip>*/
}
$h_scm_FlatHashTable$.prototype = $c_scm_FlatHashTable$.prototype;
$c_scm_FlatHashTable$.prototype.newThreshold__I__I__I = (function(_loadFactor, size) {
  var assertion = (_loadFactor < 500);
  if ((!assertion)) {
    throw new $c_jl_AssertionError("assertion failed: loadFactor too large; must be < 0.5")
  };
  var hi = (size >> 31);
  var hi$1 = (_loadFactor >> 31);
  var a0 = (65535 & size);
  var a1 = ((size >>> 16) | 0);
  var b0 = (65535 & _loadFactor);
  var b1 = ((_loadFactor >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$2 = ((((((((Math.imul(size, hi$1) + Math.imul(hi, _loadFactor)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  var this$4 = $m_RTLong$();
  var lo$1 = this$4.divideImpl__I__I__I__I__I(lo, hi$2, 1000, 0);
  return lo$1
});
var $d_scm_FlatHashTable$ = new $TypeData().initClass({
  scm_FlatHashTable$: 0
}, false, "scala.collection.mutable.FlatHashTable$", {
  scm_FlatHashTable$: 1,
  O: 1
});
$c_scm_FlatHashTable$.prototype.$classData = $d_scm_FlatHashTable$;
var $n_scm_FlatHashTable$;
function $m_scm_FlatHashTable$() {
  if ((!$n_scm_FlatHashTable$)) {
    $n_scm_FlatHashTable$ = new $c_scm_FlatHashTable$()
  };
  return $n_scm_FlatHashTable$
}
function $s_scm_FlatHashTable$HashUtils$class__improve__scm_FlatHashTable$HashUtils__I__I__I(this$, hcode, seed) {
  var i = $m_s_util_hashing_package$().byteswap32__I__I(hcode);
  return (((i >>> seed) | 0) | (i << ((-seed) | 0)))
}
function $s_scm_FlatHashTable$HashUtils$class__elemToEntry__scm_FlatHashTable$HashUtils__O__O(this$, elem) {
  return ((elem === null) ? $m_scm_FlatHashTable$NullSentinel$() : elem)
}
function $s_scm_FlatHashTable$HashUtils$class__entryToElem__scm_FlatHashTable$HashUtils__O__O(this$, entry) {
  return ((entry === $m_scm_FlatHashTable$NullSentinel$()) ? null : entry)
}
/** @constructor */
function $c_scm_FlatHashTable$NullSentinel$() {
  /*<skip>*/
}
$c_scm_FlatHashTable$NullSentinel$.prototype = new $h_O();
$c_scm_FlatHashTable$NullSentinel$.prototype.constructor = $c_scm_FlatHashTable$NullSentinel$;
/** @constructor */
function $h_scm_FlatHashTable$NullSentinel$() {
  /*<skip>*/
}
$h_scm_FlatHashTable$NullSentinel$.prototype = $c_scm_FlatHashTable$NullSentinel$.prototype;
$c_scm_FlatHashTable$NullSentinel$.prototype.hashCode__I = (function() {
  return 0
});
$c_scm_FlatHashTable$NullSentinel$.prototype.toString__T = (function() {
  return "NullSentinel"
});
var $d_scm_FlatHashTable$NullSentinel$ = new $TypeData().initClass({
  scm_FlatHashTable$NullSentinel$: 0
}, false, "scala.collection.mutable.FlatHashTable$NullSentinel$", {
  scm_FlatHashTable$NullSentinel$: 1,
  O: 1
});
$c_scm_FlatHashTable$NullSentinel$.prototype.$classData = $d_scm_FlatHashTable$NullSentinel$;
var $n_scm_FlatHashTable$NullSentinel$;
function $m_scm_FlatHashTable$NullSentinel$() {
  if ((!$n_scm_FlatHashTable$NullSentinel$)) {
    $n_scm_FlatHashTable$NullSentinel$ = new $c_scm_FlatHashTable$NullSentinel$()
  };
  return $n_scm_FlatHashTable$NullSentinel$
}
function $s_scm_FlatHashTable$class__capacity__scm_FlatHashTable__I__I(this$, expectedSize) {
  return ((expectedSize === 0) ? 1 : $m_scm_HashTable$().powerOfTwo__I__I(expectedSize))
}
function $s_scm_FlatHashTable$class__tableSizeSeed__scm_FlatHashTable__I(this$) {
  var i = (((-1) + this$.scm_HashSet__f_table.u.length) | 0);
  return $m_jl_Integer$().bitCount__I__I(i)
}
function $s_scm_FlatHashTable$class__containsElem__scm_FlatHashTable__O__Z(this$, elem) {
  return ($ps_scm_FlatHashTable$class__findElemImpl__scm_FlatHashTable__O__O(this$, elem) !== null)
}
function $ps_scm_FlatHashTable$class__findElemImpl__scm_FlatHashTable__O__O(this$, elem) {
  var searchEntry = $s_scm_FlatHashTable$HashUtils$class__elemToEntry__scm_FlatHashTable$HashUtils__O__O(this$, elem);
  var hcode = $dp_hashCode__I(searchEntry);
  var h = $s_scm_FlatHashTable$class__index__scm_FlatHashTable__I__I(this$, hcode);
  var curEntry = this$.scm_HashSet__f_table.get(h);
  while (((curEntry !== null) && (!$m_sr_BoxesRunTime$().equals__O__O__Z(curEntry, searchEntry)))) {
    h = $intMod(((1 + h) | 0), this$.scm_HashSet__f_table.u.length);
    curEntry = this$.scm_HashSet__f_table.get(h)
  };
  return curEntry
}
function $s_scm_FlatHashTable$class__addElem__scm_FlatHashTable__O__Z(this$, elem) {
  var newEntry = $s_scm_FlatHashTable$HashUtils$class__elemToEntry__scm_FlatHashTable$HashUtils__O__O(this$, elem);
  return $s_scm_FlatHashTable$class__addEntry__scm_FlatHashTable__O__Z(this$, newEntry)
}
function $s_scm_FlatHashTable$class__addEntry__scm_FlatHashTable__O__Z(this$, newEntry) {
  var hcode = $dp_hashCode__I(newEntry);
  var h = $s_scm_FlatHashTable$class__index__scm_FlatHashTable__I__I(this$, hcode);
  var curEntry = this$.scm_HashSet__f_table.get(h);
  while ((curEntry !== null)) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(curEntry, newEntry)) {
      return false
    };
    h = $intMod(((1 + h) | 0), this$.scm_HashSet__f_table.u.length);
    curEntry = this$.scm_HashSet__f_table.get(h)
  };
  this$.scm_HashSet__f_table.set(h, newEntry);
  this$.scm_HashSet__f_tableSize = ((1 + this$.scm_HashSet__f_tableSize) | 0);
  var h$1 = h;
  $s_scm_FlatHashTable$class__nnSizeMapAdd__scm_FlatHashTable__I__V(this$, h$1);
  if ((this$.scm_HashSet__f_tableSize >= this$.scm_HashSet__f_threshold)) {
    $ps_scm_FlatHashTable$class__growTable__scm_FlatHashTable__V(this$)
  };
  return true
}
function $ps_scm_FlatHashTable$class__growTable__scm_FlatHashTable__V(this$) {
  var oldtable = this$.scm_HashSet__f_table;
  this$.scm_HashSet__f_table = new $ac_O((this$.scm_HashSet__f_table.u.length << 1));
  this$.scm_HashSet__f_tableSize = 0;
  var tableLength = this$.scm_HashSet__f_table.u.length;
  $s_scm_FlatHashTable$class__nnSizeMapReset__scm_FlatHashTable__I__V(this$, tableLength);
  this$.scm_HashSet__f_seedvalue = $s_scm_FlatHashTable$class__tableSizeSeed__scm_FlatHashTable__I(this$);
  this$.scm_HashSet__f_threshold = $m_scm_FlatHashTable$().newThreshold__I__I__I(this$.scm_HashSet__f__loadFactor, this$.scm_HashSet__f_table.u.length);
  var i = 0;
  while ((i < oldtable.u.length)) {
    var entry = oldtable.get(i);
    if ((entry !== null)) {
      $s_scm_FlatHashTable$class__addEntry__scm_FlatHashTable__O__Z(this$, entry)
    };
    i = ((1 + i) | 0)
  }
}
function $s_scm_FlatHashTable$class__nnSizeMapAdd__scm_FlatHashTable__I__V(this$, h) {
  if ((this$.scm_HashSet__f_sizemap !== null)) {
    var p = (h >> 5);
    var ev$1 = this$.scm_HashSet__f_sizemap;
    ev$1.set(p, ((1 + ev$1.get(p)) | 0))
  }
}
function $s_scm_FlatHashTable$class__nnSizeMapReset__scm_FlatHashTable__I__V(this$, tableLength) {
  if ((this$.scm_HashSet__f_sizemap !== null)) {
    var nsize = $s_scm_FlatHashTable$class__calcSizeMapSize__scm_FlatHashTable__I__I(this$, tableLength);
    if ((this$.scm_HashSet__f_sizemap.u.length !== nsize)) {
      this$.scm_HashSet__f_sizemap = new $ac_I(nsize)
    } else {
      var a = this$.scm_HashSet__f_sizemap;
      $m_ju_Arrays$().fill__AI__I__V(a, 0)
    }
  }
}
function $s_scm_FlatHashTable$class__calcSizeMapSize__scm_FlatHashTable__I__I(this$, tableLength) {
  return ((1 + (tableLength >> 5)) | 0)
}
function $s_scm_FlatHashTable$class__index__scm_FlatHashTable__I__I(this$, hcode) {
  var seed = this$.scm_HashSet__f_seedvalue;
  var improved = $s_scm_FlatHashTable$HashUtils$class__improve__scm_FlatHashTable$HashUtils__I__I__I(this$, hcode, seed);
  var ones = (((-1) + this$.scm_HashSet__f_table.u.length) | 0);
  return (((improved >>> ((32 - $m_jl_Integer$().bitCount__I__I(ones)) | 0)) | 0) & ones)
}
function $s_scm_FlatHashTable$class__initWithContents__scm_FlatHashTable__scm_FlatHashTable$Contents__V(this$, c) {
  if ((c !== null)) {
    this$.scm_HashSet__f__loadFactor = c.loadFactor__I();
    this$.scm_HashSet__f_table = c.table__AO();
    this$.scm_HashSet__f_tableSize = c.tableSize__I();
    this$.scm_HashSet__f_threshold = c.threshold__I();
    this$.scm_HashSet__f_seedvalue = c.seedvalue__I();
    this$.scm_HashSet__f_sizemap = c.sizemap__AI()
  }
}
function $s_scm_FlatHashTable$class__$init$__scm_FlatHashTable__V(this$) {
  this$.scm_HashSet__f__loadFactor = 450;
  this$.scm_HashSet__f_table = new $ac_O($s_scm_FlatHashTable$class__capacity__scm_FlatHashTable__I__I(this$, 32));
  this$.scm_HashSet__f_tableSize = 0;
  this$.scm_HashSet__f_threshold = $m_scm_FlatHashTable$().newThreshold__I__I__I(this$.scm_HashSet__f__loadFactor, $s_scm_FlatHashTable$class__capacity__scm_FlatHashTable__I__I(this$, 32));
  this$.scm_HashSet__f_sizemap = null;
  this$.scm_HashSet__f_seedvalue = $s_scm_FlatHashTable$class__tableSizeSeed__scm_FlatHashTable__I(this$)
}
function $is_scm_HashEntry(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_HashEntry)))
}
function $as_scm_HashEntry(obj) {
  return (($is_scm_HashEntry(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashEntry"))
}
function $isArrayOf_scm_HashEntry(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashEntry)))
}
function $asArrayOf_scm_HashEntry(obj, depth) {
  return (($isArrayOf_scm_HashEntry(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashEntry;", depth))
}
var $d_scm_HashEntry = new $TypeData().initClass({
  scm_HashEntry: 0
}, true, "scala.collection.mutable.HashEntry", {
  scm_HashEntry: 1,
  O: 1
});
/** @constructor */
function $c_scm_HashTable$() {
  /*<skip>*/
}
$c_scm_HashTable$.prototype = new $h_O();
$c_scm_HashTable$.prototype.constructor = $c_scm_HashTable$;
/** @constructor */
function $h_scm_HashTable$() {
  /*<skip>*/
}
$h_scm_HashTable$.prototype = $c_scm_HashTable$.prototype;
$c_scm_HashTable$.prototype.newThreshold__I__I__I = (function(_loadFactor, size) {
  var hi = (size >> 31);
  var hi$1 = (_loadFactor >> 31);
  var a0 = (65535 & size);
  var a1 = ((size >>> 16) | 0);
  var b0 = (65535 & _loadFactor);
  var b1 = ((_loadFactor >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$2 = ((((((((Math.imul(size, hi$1) + Math.imul(hi, _loadFactor)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  var this$3 = $m_RTLong$();
  var lo$1 = this$3.divideImpl__I__I__I__I__I(lo, hi$2, 1000, 0);
  return lo$1
});
$c_scm_HashTable$.prototype.capacity__I__I = (function(expectedSize) {
  return ((expectedSize === 0) ? 1 : this.powerOfTwo__I__I(expectedSize))
});
$c_scm_HashTable$.prototype.powerOfTwo__I__I = (function(target) {
  var c = (((-1) + target) | 0);
  c = (c | ((c >>> 1) | 0));
  c = (c | ((c >>> 2) | 0));
  c = (c | ((c >>> 4) | 0));
  c = (c | ((c >>> 8) | 0));
  c = (c | ((c >>> 16) | 0));
  return ((1 + c) | 0)
});
var $d_scm_HashTable$ = new $TypeData().initClass({
  scm_HashTable$: 0
}, false, "scala.collection.mutable.HashTable$", {
  scm_HashTable$: 1,
  O: 1
});
$c_scm_HashTable$.prototype.$classData = $d_scm_HashTable$;
var $n_scm_HashTable$;
function $m_scm_HashTable$() {
  if ((!$n_scm_HashTable$)) {
    $n_scm_HashTable$ = new $c_scm_HashTable$()
  };
  return $n_scm_HashTable$
}
function $s_scm_HashTable$HashUtils$class__improve__scm_HashTable$HashUtils__I__I__I(this$, hcode, seed) {
  var i = $m_s_util_hashing_package$().byteswap32__I__I(hcode);
  return (((i >>> seed) | 0) | (i << ((-seed) | 0)))
}
function $s_scm_HashTable$class__tableSizeSeed__scm_HashTable__I(this$) {
  var i = (((-1) + this$.scm_HashMap__f_table.u.length) | 0);
  return $m_jl_Integer$().bitCount__I__I(i)
}
function $ps_scm_HashTable$class__initialThreshold__scm_HashTable__I__I(this$, _loadFactor) {
  return $m_scm_HashTable$().newThreshold__I__I__I(_loadFactor, $m_scm_HashTable$().capacity__I__I(16))
}
function $s_scm_HashTable$class__scala$collection$mutable$HashTable$$lastPopulatedIndex__scm_HashTable__I(this$) {
  var idx = (((-1) + this$.scm_HashMap__f_table.u.length) | 0);
  while (((this$.scm_HashMap__f_table.get(idx) === null) && (idx > 0))) {
    idx = (((-1) + idx) | 0)
  };
  return idx
}
function $s_scm_HashTable$class__findEntry__scm_HashTable__O__scm_HashEntry(this$, key) {
  var hcode = $m_sr_ScalaRunTime$().hash__O__I(key);
  return $s_scm_HashTable$class__scala$collection$mutable$HashTable$$findEntry0__scm_HashTable__O__I__scm_HashEntry(this$, key, $s_scm_HashTable$class__index__scm_HashTable__I__I(this$, hcode))
}
function $s_scm_HashTable$class__scala$collection$mutable$HashTable$$findEntry0__scm_HashTable__O__I__scm_HashEntry(this$, key, h) {
  var e = this$.scm_HashMap__f_table.get(h);
  while (true) {
    if ((e !== null)) {
      var key1 = e.scm_DefaultEntry__f_key;
      var $$x1 = (!$m_sr_BoxesRunTime$().equals__O__O__Z(key1, key))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      e = $as_scm_HashEntry(e.scm_DefaultEntry__f_next)
    } else {
      break
    }
  };
  return e
}
function $s_scm_HashTable$class__scala$collection$mutable$HashTable$$addEntry0__scm_HashTable__scm_HashEntry__I__V(this$, e, h) {
  e.scm_DefaultEntry__f_next = this$.scm_HashMap__f_table.get(h);
  this$.scm_HashMap__f_table.set(h, e);
  this$.scm_HashMap__f_tableSize = ((1 + this$.scm_HashMap__f_tableSize) | 0);
  $s_scm_HashTable$class__nnSizeMapAdd__scm_HashTable__I__V(this$, h);
  if ((this$.scm_HashMap__f_tableSize > this$.scm_HashMap__f_threshold)) {
    $ps_scm_HashTable$class__resize__scm_HashTable__I__V(this$, (this$.scm_HashMap__f_table.u.length << 1))
  }
}
function $s_scm_HashTable$class__findOrAddEntry__scm_HashTable__O__O__scm_HashEntry(this$, key, value) {
  var hcode = $m_sr_ScalaRunTime$().hash__O__I(key);
  var h = $s_scm_HashTable$class__index__scm_HashTable__I__I(this$, hcode);
  var e = $s_scm_HashTable$class__scala$collection$mutable$HashTable$$findEntry0__scm_HashTable__O__I__scm_HashEntry(this$, key, h);
  return ((e !== null) ? e : ($s_scm_HashTable$class__scala$collection$mutable$HashTable$$addEntry0__scm_HashTable__scm_HashEntry__I__V(this$, new $c_scm_DefaultEntry(key, value), h), null))
}
function $ps_scm_HashTable$class__resize__scm_HashTable__I__V(this$, newSize) {
  var oldTable = this$.scm_HashMap__f_table;
  this$.scm_HashMap__f_table = new ($d_scm_HashEntry.getArrayOf().constr)(newSize);
  var tableLength = this$.scm_HashMap__f_table.u.length;
  $s_scm_HashTable$class__nnSizeMapReset__scm_HashTable__I__V(this$, tableLength);
  var i = (((-1) + oldTable.u.length) | 0);
  while ((i >= 0)) {
    var e = oldTable.get(i);
    while ((e !== null)) {
      var key = e.scm_DefaultEntry__f_key;
      var hcode = $m_sr_ScalaRunTime$().hash__O__I(key);
      var h = $s_scm_HashTable$class__index__scm_HashTable__I__I(this$, hcode);
      var e1 = $as_scm_HashEntry(e.scm_DefaultEntry__f_next);
      e.scm_DefaultEntry__f_next = this$.scm_HashMap__f_table.get(h);
      this$.scm_HashMap__f_table.set(h, e);
      e = e1;
      $s_scm_HashTable$class__nnSizeMapAdd__scm_HashTable__I__V(this$, h)
    };
    i = (((-1) + i) | 0)
  };
  this$.scm_HashMap__f_threshold = $m_scm_HashTable$().newThreshold__I__I__I(this$.scm_HashMap__f__loadFactor, newSize)
}
function $s_scm_HashTable$class__nnSizeMapAdd__scm_HashTable__I__V(this$, h) {
  if ((this$.scm_HashMap__f_sizemap !== null)) {
    var ev$1 = this$.scm_HashMap__f_sizemap;
    var ev$2 = (h >> 5);
    ev$1.set(ev$2, ((1 + ev$1.get(ev$2)) | 0))
  }
}
function $s_scm_HashTable$class__nnSizeMapReset__scm_HashTable__I__V(this$, tableLength) {
  if ((this$.scm_HashMap__f_sizemap !== null)) {
    var nsize = $s_scm_HashTable$class__calcSizeMapSize__scm_HashTable__I__I(this$, tableLength);
    if ((this$.scm_HashMap__f_sizemap.u.length !== nsize)) {
      this$.scm_HashMap__f_sizemap = new $ac_I(nsize)
    } else {
      var a = this$.scm_HashMap__f_sizemap;
      $m_ju_Arrays$().fill__AI__I__V(a, 0)
    }
  }
}
function $s_scm_HashTable$class__calcSizeMapSize__scm_HashTable__I__I(this$, tableLength) {
  return ((1 + (tableLength >> 5)) | 0)
}
function $s_scm_HashTable$class__index__scm_HashTable__I__I(this$, hcode) {
  if ((this$.scm_HashMap__f_table.u.length === 1)) {
    return 0
  } else {
    var seed = this$.scm_HashMap__f_seedvalue;
    var $$x1 = $s_scm_HashTable$HashUtils$class__improve__scm_HashTable$HashUtils__I__I__I(this$, hcode, seed);
    var i = (((-1) + this$.scm_HashMap__f_table.u.length) | 0);
    return (($$x1 >>> Math.clz32(i)) | 0)
  }
}
function $s_scm_HashTable$class__initWithContents__scm_HashTable__scm_HashTable$Contents__V(this$, c) {
  if ((c !== null)) {
    this$.scm_HashMap__f__loadFactor = c.loadFactor__I();
    this$.scm_HashMap__f_table = c.table__Ascm_HashEntry();
    this$.scm_HashMap__f_tableSize = c.tableSize__I();
    this$.scm_HashMap__f_threshold = c.threshold__I();
    this$.scm_HashMap__f_seedvalue = c.seedvalue__I();
    this$.scm_HashMap__f_sizemap = c.sizemap__AI()
  }
}
function $s_scm_HashTable$class__$init$__scm_HashTable__V(this$) {
  this$.scm_HashMap__f__loadFactor = 750;
  this$.scm_HashMap__f_table = new ($d_scm_HashEntry.getArrayOf().constr)($m_scm_HashTable$().capacity__I__I(16));
  this$.scm_HashMap__f_tableSize = 0;
  this$.scm_HashMap__f_threshold = $ps_scm_HashTable$class__initialThreshold__scm_HashTable__I__I(this$, this$.scm_HashMap__f__loadFactor);
  this$.scm_HashMap__f_sizemap = null;
  this$.scm_HashMap__f_seedvalue = $s_scm_HashTable$class__tableSizeSeed__scm_HashTable__I(this$)
}
function $s_scm_LinkedListLike$class__isEmpty__scm_LinkedListLike__Z(this$) {
  return (this$.scm_LinkedList__f_next === this$)
}
function $ps_scm_LinkedListLike$class__length0__scm_LinkedListLike__scm_Seq__I__I(this$, elem, acc) {
  while (true) {
    var this$1 = $as_scm_LinkedListLike(elem);
    if ($s_scm_LinkedListLike$class__isEmpty__scm_LinkedListLike__Z(this$1)) {
      return acc
    } else {
      var temp$elem = $as_scm_LinkedListLike(elem).scm_LinkedList__f_next;
      var temp$acc = ((1 + acc) | 0);
      elem = temp$elem;
      acc = temp$acc
    }
  }
}
function $s_scm_LinkedListLike$class__head__scm_LinkedListLike__O(this$) {
  if ($s_scm_LinkedListLike$class__isEmpty__scm_LinkedListLike__Z(this$)) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  } else {
    return this$.scm_LinkedList__f_elem
  }
}
function $s_scm_LinkedListLike$class__tail__scm_LinkedListLike__scm_Seq(this$) {
  var requirement = (!this$.isEmpty__Z());
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: tail of empty list")
  };
  return this$.scm_LinkedList__f_next
}
function $s_scm_LinkedListLike$class__drop__scm_LinkedListLike__I__scm_Seq(this$, n) {
  var i = 0;
  var these = $as_scm_Seq(this$);
  while (true) {
    if ((i < n)) {
      var this$1 = $as_scm_LinkedListLike(these);
      var $$x1 = (!$s_scm_LinkedListLike$class__isEmpty__scm_LinkedListLike__Z(this$1))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      these = $as_scm_LinkedListLike(these).scm_LinkedList__f_next;
      i = ((1 + i) | 0)
    } else {
      break
    }
  };
  return these
}
function $s_scm_LinkedListLike$class__apply__scm_LinkedListLike__I__O(this$, n) {
  var loc = $s_scm_LinkedListLike$class__drop__scm_LinkedListLike__I__scm_Seq(this$, n);
  if (loc.nonEmpty__Z()) {
    return $as_scm_LinkedListLike(loc).scm_LinkedList__f_elem
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  }
}
function $s_scm_LinkedListLike$class__foreach__scm_LinkedListLike__F1__V(this$, f) {
  var these = this$;
  while (true) {
    var this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      f.apply__O__O(these.scm_LinkedList__f_elem);
      these = $as_scm_LinkedListLike(these.scm_LinkedList__f_next)
    } else {
      break
    }
  }
}
function $s_scm_ResizableArray$class__apply__scm_ResizableArray__I__O(this$, idx) {
  if ((idx >= this$.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  };
  return this$.scm_ArrayBuffer__f_array.get(idx)
}
function $s_scm_ResizableArray$class__update__scm_ResizableArray__I__O__V(this$, idx, elem) {
  if ((idx >= this$.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  };
  this$.scm_ArrayBuffer__f_array.set(idx, elem)
}
function $s_scm_ResizableArray$class__foreach__scm_ResizableArray__F1__V(this$, f) {
  var i = 0;
  var top = this$.length__I();
  while ((i < top)) {
    f.apply__O__O(this$.scm_ArrayBuffer__f_array.get(i));
    i = ((1 + i) | 0)
  }
}
function $s_scm_ResizableArray$class__copyToArray__scm_ResizableArray__O__I__I__V(this$, xs, start, len) {
  var that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  var x = ((len < that) ? len : that);
  var that$1 = this$.scm_ArrayBuffer__f_size0;
  var len1 = ((x < that$1) ? x : that$1);
  $m_s_Array$().copy__O__I__O__I__I__V(this$.scm_ArrayBuffer__f_array, 0, xs, start, len1)
}
function $s_scm_ResizableArray$class__reduceToSize__scm_ResizableArray__I__V(this$, sz) {
  $m_s_Predef$().require__Z__V((sz <= this$.scm_ArrayBuffer__f_size0));
  while ((this$.scm_ArrayBuffer__f_size0 > sz)) {
    this$.scm_ArrayBuffer__f_size0 = (((-1) + this$.scm_ArrayBuffer__f_size0) | 0);
    this$.scm_ArrayBuffer__f_array.set(this$.scm_ArrayBuffer__f_size0, null)
  }
}
function $s_scm_ResizableArray$class__ensureSize__scm_ResizableArray__I__V(this$, n) {
  var value = this$.scm_ArrayBuffer__f_array.u.length;
  var hi = (value >> 31);
  var hi$1 = (n >> 31);
  if (((hi$1 === hi) ? (((-2147483648) ^ n) > ((-2147483648) ^ value)) : (hi$1 > hi))) {
    var lo = (value << 1);
    var hi$2 = (((value >>> 31) | 0) | (hi << 1));
    var newSize__lo = lo;
    var newSize__hi = hi$2;
    while (true) {
      var hi$3 = (n >> 31);
      var b__lo = newSize__lo;
      var b__hi = newSize__hi;
      var bhi = b__hi;
      if (((hi$3 === bhi) ? (((-2147483648) ^ n) > ((-2147483648) ^ b__lo)) : (hi$3 > bhi))) {
        var this$4__lo = newSize__lo;
        var this$4__hi = newSize__hi;
        var lo$1 = this$4__lo;
        var lo$2 = (lo$1 << 1);
        var hi$4 = (((lo$1 >>> 31) | 0) | (this$4__hi << 1));
        var $$x1__lo = lo$2;
        var $$x1__hi = hi$4;
        newSize__lo = $$x1__lo;
        newSize__hi = $$x1__hi
      } else {
        break
      }
    };
    var this$5__lo = newSize__lo;
    var this$5__hi = newSize__hi;
    var ahi = this$5__hi;
    if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
      var $$x2__lo = 2147483647;
      var $$x2__hi = 0;
      newSize__lo = $$x2__lo;
      newSize__hi = $$x2__hi
    };
    var this$6__lo = newSize__lo;
    var this$6__hi = newSize__hi;
    var newArray = new $ac_O(this$6__lo);
    var src = this$.scm_ArrayBuffer__f_array;
    var length = this$.scm_ArrayBuffer__f_size0;
    src.copyTo(0, newArray, 0, length);
    this$.scm_ArrayBuffer__f_array = newArray
  }
}
function $s_scm_ResizableArray$class__$init$__scm_ResizableArray__V(this$) {
  var x = this$.scm_ArrayBuffer__f_initialSize;
  this$.scm_ArrayBuffer__f_array = new $ac_O(((x > 1) ? x : 1));
  this$.scm_ArrayBuffer__f_size0 = 0
}
/** @constructor */
function $c_s_math_Ordered$() {
  /*<skip>*/
}
$c_s_math_Ordered$.prototype = new $h_O();
$c_s_math_Ordered$.prototype.constructor = $c_s_math_Ordered$;
/** @constructor */
function $h_s_math_Ordered$() {
  /*<skip>*/
}
$h_s_math_Ordered$.prototype = $c_s_math_Ordered$.prototype;
var $d_s_math_Ordered$ = new $TypeData().initClass({
  s_math_Ordered$: 0
}, false, "scala.math.Ordered$", {
  s_math_Ordered$: 1,
  O: 1
});
$c_s_math_Ordered$.prototype.$classData = $d_s_math_Ordered$;
var $n_s_math_Ordered$;
function $m_s_math_Ordered$() {
  if ((!$n_s_math_Ordered$)) {
    $n_s_math_Ordered$ = new $c_s_math_Ordered$()
  };
  return $n_s_math_Ordered$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_AnyRef = null;
  this.s_package$__f_Traversable = null;
  this.s_package$__f_Iterable = null;
  this.s_package$__f_Seq = null;
  this.s_package$__f_IndexedSeq = null;
  this.s_package$__f_Iterator = null;
  this.s_package$__f_List = null;
  this.s_package$__f_Nil = null;
  this.s_package$__f_$colon$colon = null;
  this.s_package$__f_$plus$colon = null;
  this.s_package$__f_$colon$plus = null;
  this.s_package$__f_Stream = null;
  this.s_package$__f_$hash$colon$colon = null;
  this.s_package$__f_Vector = null;
  this.s_package$__f_StringBuilder = null;
  this.s_package$__f_Range = null;
  this.s_package$__f_BigDecimal = null;
  this.s_package$__f_BigInt = null;
  this.s_package$__f_Equiv = null;
  this.s_package$__f_Fractional = null;
  this.s_package$__f_Integral = null;
  this.s_package$__f_Numeric = null;
  this.s_package$__f_Ordered = null;
  this.s_package$__f_Ordering = null;
  this.s_package$__f_Either = null;
  this.s_package$__f_Left = null;
  this.s_package$__f_Right = null;
  this.s_package$__f_bitmap$0 = 0;
  $n_s_package$ = this;
  this.s_package$__f_AnyRef = new $c_s_package$$anon$1();
  this.s_package$__f_Traversable = $m_sc_Traversable$();
  this.s_package$__f_Iterable = $m_sc_Iterable$();
  this.s_package$__f_Seq = $m_sc_Seq$();
  this.s_package$__f_IndexedSeq = $m_sc_IndexedSeq$();
  this.s_package$__f_Iterator = $m_sc_Iterator$();
  this.s_package$__f_List = $m_sci_List$();
  this.s_package$__f_Nil = $m_sci_Nil$();
  this.s_package$__f_$colon$colon = $m_sci_$colon$colon$();
  this.s_package$__f_$plus$colon = $m_sc_$plus$colon$();
  this.s_package$__f_$colon$plus = $m_sc_$colon$plus$();
  this.s_package$__f_Stream = $m_sci_Stream$();
  this.s_package$__f_$hash$colon$colon = $m_sci_Stream$$hash$colon$colon$();
  this.s_package$__f_Vector = $m_sci_Vector$();
  this.s_package$__f_StringBuilder = $m_scm_StringBuilder$();
  this.s_package$__f_Range = $m_sci_Range$();
  this.s_package$__f_Equiv = $m_s_math_Equiv$();
  this.s_package$__f_Fractional = $m_s_math_Fractional$();
  this.s_package$__f_Integral = $m_s_math_Integral$();
  this.s_package$__f_Numeric = $m_s_math_Numeric$();
  this.s_package$__f_Ordered = $m_s_math_Ordered$();
  this.s_package$__f_Ordering = $m_s_math_Ordering$();
  this.s_package$__f_Either = $m_s_util_Either$();
  this.s_package$__f_Left = $m_s_util_Left$();
  this.s_package$__f_Right = $m_s_util_Right$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_s_reflect_ClassManifestFactory$() {
  this.s_reflect_ClassManifestFactory$__f_Byte = null;
  this.s_reflect_ClassManifestFactory$__f_Short = null;
  this.s_reflect_ClassManifestFactory$__f_Char = null;
  this.s_reflect_ClassManifestFactory$__f_Int = null;
  this.s_reflect_ClassManifestFactory$__f_Long = null;
  this.s_reflect_ClassManifestFactory$__f_Float = null;
  this.s_reflect_ClassManifestFactory$__f_Double = null;
  this.s_reflect_ClassManifestFactory$__f_Boolean = null;
  this.s_reflect_ClassManifestFactory$__f_Unit = null;
  this.s_reflect_ClassManifestFactory$__f_Any = null;
  this.s_reflect_ClassManifestFactory$__f_Object = null;
  this.s_reflect_ClassManifestFactory$__f_AnyVal = null;
  this.s_reflect_ClassManifestFactory$__f_Nothing = null;
  this.s_reflect_ClassManifestFactory$__f_Null = null;
  $n_s_reflect_ClassManifestFactory$ = this;
  this.s_reflect_ClassManifestFactory$__f_Byte = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.s_reflect_ClassManifestFactory$__f_Short = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.s_reflect_ClassManifestFactory$__f_Char = $m_s_reflect_ManifestFactory$CharManifest$();
  this.s_reflect_ClassManifestFactory$__f_Int = $m_s_reflect_ManifestFactory$IntManifest$();
  this.s_reflect_ClassManifestFactory$__f_Long = $m_s_reflect_ManifestFactory$LongManifest$();
  this.s_reflect_ClassManifestFactory$__f_Float = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.s_reflect_ClassManifestFactory$__f_Double = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.s_reflect_ClassManifestFactory$__f_Boolean = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.s_reflect_ClassManifestFactory$__f_Unit = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.s_reflect_ClassManifestFactory$__f_Any = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.s_reflect_ClassManifestFactory$__f_Object = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.s_reflect_ClassManifestFactory$__f_AnyVal = $m_s_reflect_ManifestFactory$AnyValManifest$();
  this.s_reflect_ClassManifestFactory$__f_Nothing = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.s_reflect_ClassManifestFactory$__f_Null = $m_s_reflect_ManifestFactory$NullManifest$()
}
$c_s_reflect_ClassManifestFactory$.prototype = new $h_O();
$c_s_reflect_ClassManifestFactory$.prototype.constructor = $c_s_reflect_ClassManifestFactory$;
/** @constructor */
function $h_s_reflect_ClassManifestFactory$() {
  /*<skip>*/
}
$h_s_reflect_ClassManifestFactory$.prototype = $c_s_reflect_ClassManifestFactory$.prototype;
var $d_s_reflect_ClassManifestFactory$ = new $TypeData().initClass({
  s_reflect_ClassManifestFactory$: 0
}, false, "scala.reflect.ClassManifestFactory$", {
  s_reflect_ClassManifestFactory$: 1,
  O: 1
});
$c_s_reflect_ClassManifestFactory$.prototype.$classData = $d_s_reflect_ClassManifestFactory$;
var $n_s_reflect_ClassManifestFactory$;
function $m_s_reflect_ClassManifestFactory$() {
  if ((!$n_s_reflect_ClassManifestFactory$)) {
    $n_s_reflect_ClassManifestFactory$ = new $c_s_reflect_ClassManifestFactory$()
  };
  return $n_s_reflect_ClassManifestFactory$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$() {
  /*<skip>*/
}
$c_s_reflect_ManifestFactory$.prototype = new $h_O();
$c_s_reflect_ManifestFactory$.prototype.constructor = $c_s_reflect_ManifestFactory$;
/** @constructor */
function $h_s_reflect_ManifestFactory$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$.prototype = $c_s_reflect_ManifestFactory$.prototype;
var $d_s_reflect_ManifestFactory$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$: 0
}, false, "scala.reflect.ManifestFactory$", {
  s_reflect_ManifestFactory$: 1,
  O: 1
});
$c_s_reflect_ManifestFactory$.prototype.$classData = $d_s_reflect_ManifestFactory$;
var $n_s_reflect_ManifestFactory$;
function $m_s_reflect_ManifestFactory$() {
  if ((!$n_s_reflect_ManifestFactory$)) {
    $n_s_reflect_ManifestFactory$ = new $c_s_reflect_ManifestFactory$()
  };
  return $n_s_reflect_ManifestFactory$
}
/** @constructor */
function $c_s_reflect_package$() {
  this.s_reflect_package$__f_ClassManifest = null;
  this.s_reflect_package$__f_Manifest = null;
  $n_s_reflect_package$ = this;
  this.s_reflect_package$__f_ClassManifest = $m_s_reflect_ClassManifestFactory$();
  this.s_reflect_package$__f_Manifest = $m_s_reflect_ManifestFactory$()
}
$c_s_reflect_package$.prototype = new $h_O();
$c_s_reflect_package$.prototype.constructor = $c_s_reflect_package$;
/** @constructor */
function $h_s_reflect_package$() {
  /*<skip>*/
}
$h_s_reflect_package$.prototype = $c_s_reflect_package$.prototype;
var $d_s_reflect_package$ = new $TypeData().initClass({
  s_reflect_package$: 0
}, false, "scala.reflect.package$", {
  s_reflect_package$: 1,
  O: 1
});
$c_s_reflect_package$.prototype.$classData = $d_s_reflect_package$;
var $n_s_reflect_package$;
function $m_s_reflect_package$() {
  if ((!$n_s_reflect_package$)) {
    $n_s_reflect_package$ = new $c_s_reflect_package$()
  };
  return $n_s_reflect_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      return (x2$1 === $uC(x3))
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var value = $uC(x3);
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return x4.equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    return ($uC(xc) === $uC(x2))
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      return (x2$1 === $uC(xc))
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var value = $uC(xc);
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
var $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return x2.get(idx)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return x3.get(idx)
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return x4.get(idx)
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return x5.get(idx)
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return x6.get(idx)
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC(x7.get(idx))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return x8.get(idx)
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return x9.get(idx)
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return x10.get(idx)
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    x2.set(idx, value)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    x3.set(idx, $uI(value))
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    x4.set(idx, $uD(value))
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    x5.set(idx, $uJ(value))
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    x6.set(idx, $uF(value))
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    x7.set(idx, $uC(value))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    x8.set(idx, $uB(value))
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    x9.set(idx, $uS(value))
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    x10.set(idx, $uZ(value))
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_length__O__I = (function(xs) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return x2.u.length
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return x3.u.length
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return x4.u.length
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return x5.u.length
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return x6.u.length
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return x7.u.length
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return x8.u.length
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return x9.u.length
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return x10.u.length
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = x.productIterator__sc_Iterator();
  var start = (x.productPrefix__T() + "(");
  return $s_sc_TraversableOnce$class__mkString__sc_TraversableOnce__T__T__T__T(this$1, start, ",", ")")
});
$c_sr_ScalaRunTime$.prototype.hash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if ($is_jl_Number(x)) {
    var n = $as_jl_Number(x);
    if (((typeof n) === "number")) {
      var x2 = $uD(n);
      return $m_sr_Statics$().doubleHash__D__I(x2)
    } else if ((n instanceof $c_RTLong)) {
      var t = $uJ(n);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(n)
    }
  } else {
    return $dp_hashCode__I(x)
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length))
});
$c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sjsr_package$() {
  /*<skip>*/
}
$c_sjsr_package$.prototype = new $h_O();
$c_sjsr_package$.prototype.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
  /*<skip>*/
}
$h_sjsr_package$.prototype = $c_sjsr_package$.prototype;
$c_sjsr_package$.prototype.wrapJavaScriptException__O__jl_Throwable = (function(e) {
  if ((e instanceof $c_jl_Throwable)) {
    var x2 = $as_jl_Throwable(e);
    return x2
  } else {
    return new $c_sjs_js_JavaScriptException(e)
  }
});
$c_sjsr_package$.prototype.unwrapJavaScriptException__jl_Throwable__O = (function(th) {
  if ((th instanceof $c_sjs_js_JavaScriptException)) {
    var x2 = $as_sjs_js_JavaScriptException(th);
    var e = x2.sjs_js_JavaScriptException__f_exception;
    return e
  } else {
    return th
  }
});
var $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
  /*<skip>*/
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")")
});
var $d_s_util_DynamicVariable = new $TypeData().initClass({
  s_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", {
  s_util_DynamicVariable: 1,
  O: 1
});
$c_s_util_DynamicVariable.prototype.$classData = $d_s_util_DynamicVariable;
/** @constructor */
function $c_s_util_Either$() {
  /*<skip>*/
}
$c_s_util_Either$.prototype = new $h_O();
$c_s_util_Either$.prototype.constructor = $c_s_util_Either$;
/** @constructor */
function $h_s_util_Either$() {
  /*<skip>*/
}
$h_s_util_Either$.prototype = $c_s_util_Either$.prototype;
var $d_s_util_Either$ = new $TypeData().initClass({
  s_util_Either$: 0
}, false, "scala.util.Either$", {
  s_util_Either$: 1,
  O: 1
});
$c_s_util_Either$.prototype.$classData = $d_s_util_Either$;
var $n_s_util_Either$;
function $m_s_util_Either$() {
  if ((!$n_s_util_Either$)) {
    $n_s_util_Either$ = new $c_s_util_Either$()
  };
  return $n_s_util_Either$
}
/** @constructor */
function $c_s_util_control_Breaks() {
  this.s_util_control_Breaks__f_scala$util$control$Breaks$$breakException = null;
  this.s_util_control_Breaks__f_scala$util$control$Breaks$$breakException = new $c_s_util_control_BreakControl()
}
$c_s_util_control_Breaks.prototype = new $h_O();
$c_s_util_control_Breaks.prototype.constructor = $c_s_util_control_Breaks;
/** @constructor */
function $h_s_util_control_Breaks() {
  /*<skip>*/
}
$h_s_util_control_Breaks.prototype = $c_s_util_control_Breaks.prototype;
var $d_s_util_control_Breaks = new $TypeData().initClass({
  s_util_control_Breaks: 0
}, false, "scala.util.control.Breaks", {
  s_util_control_Breaks: 1,
  O: 1
});
$c_s_util_control_Breaks.prototype.$classData = $d_s_util_control_Breaks;
function $s_s_util_control_NoStackTrace$class__fillInStackTrace__s_util_control_NoStackTrace__jl_Throwable(this$) {
  var this$1 = $m_s_util_control_NoStackTrace$();
  if (this$1.s_util_control_NoStackTrace$__f__noSuppression) {
    return $c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable.call(this$)
  } else {
    return $as_jl_Throwable(this$)
  }
}
function $p_s_util_hashing_MurmurHash3__avalanche__I__I($thiz, hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__I = (function(x, seed) {
  var arr = x.productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.productPrefix__T())
  } else {
    var h = seed;
    var i = 0;
    while ((i < arr)) {
      h = this.mix__I__I__I(h, $m_sr_ScalaRunTime$().hash__O__I(x.productElement__I__O(i)));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_TraversableOnce__I__I = (function(xs, seed) {
  var a = new $c_sr_IntRef(0);
  var b = new $c_sr_IntRef(0);
  var n = new $c_sr_IntRef(0);
  var c = new $c_sr_IntRef(1);
  xs.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$5, a$1, b$1, n$1, c$1) => ((x$2) => {
    var h = $m_sr_ScalaRunTime$().hash__O__I(x$2);
    a$1.sr_IntRef__f_elem = ((a$1.sr_IntRef__f_elem + h) | 0);
    b$1.sr_IntRef__f_elem = (b$1.sr_IntRef__f_elem ^ h);
    if ((h !== 0)) {
      c$1.sr_IntRef__f_elem = Math.imul(c$1.sr_IntRef__f_elem, h)
    };
    n$1.sr_IntRef__f_elem = ((1 + n$1.sr_IntRef__f_elem) | 0)
  }))(this, a, b, n, c)));
  var h$1 = seed;
  h$1 = this.mix__I__I__I(h$1, a.sr_IntRef__f_elem);
  h$1 = this.mix__I__I__I(h$1, b.sr_IntRef__f_elem);
  h$1 = this.mixLast__I__I__I(h$1, c.sr_IntRef__f_elem);
  return this.finalizeHash__I__I__I(h$1, n.sr_IntRef__f_elem)
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_TraversableOnce__I__I = (function(xs, seed) {
  var n = new $c_sr_IntRef(0);
  var h = new $c_sr_IntRef(seed);
  xs.foreach__F1__V(new $c_sjsr_AnonFunction1(((this$3, n$1, h$1) => ((x$2) => {
    h$1.sr_IntRef__f_elem = this$3.mix__I__I__I(h$1.sr_IntRef__f_elem, $m_sr_ScalaRunTime$().hash__O__I(x$2));
    n$1.sr_IntRef__f_elem = ((1 + n$1.sr_IntRef__f_elem) | 0)
  }))(this, n, h)));
  return this.finalizeHash__I__I__I(h.sr_IntRef__f_elem, n.sr_IntRef__f_elem)
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var elems = xs;
  while ((!elems.isEmpty__Z())) {
    var head = elems.head__O();
    var this$1 = elems;
    var tail = this$1.tail__sci_List();
    h = this.mix__I__I__I(h, $m_sr_ScalaRunTime$().hash__O__I(head));
    n = ((1 + n) | 0);
    elems = tail
  };
  return this.finalizeHash__I__I__I(h, n)
});
/** @constructor */
function $c_s_util_hashing_package$() {
  /*<skip>*/
}
$c_s_util_hashing_package$.prototype = new $h_O();
$c_s_util_hashing_package$.prototype.constructor = $c_s_util_hashing_package$;
/** @constructor */
function $h_s_util_hashing_package$() {
  /*<skip>*/
}
$h_s_util_hashing_package$.prototype = $c_s_util_hashing_package$.prototype;
$c_s_util_hashing_package$.prototype.byteswap32__I__I = (function(v) {
  var hc = Math.imul((-1640532531), v);
  var i = hc;
  hc = $m_jl_Integer$().reverseBytes__I__I(i);
  return Math.imul((-1640532531), hc)
});
var $d_s_util_hashing_package$ = new $TypeData().initClass({
  s_util_hashing_package$: 0
}, false, "scala.util.hashing.package$", {
  s_util_hashing_package$: 1,
  O: 1
});
$c_s_util_hashing_package$.prototype.$classData = $d_s_util_hashing_package$;
var $n_s_util_hashing_package$;
function $m_s_util_hashing_package$() {
  if ((!$n_s_util_hashing_package$)) {
    $n_s_util_hashing_package$ = new $c_s_util_hashing_package$()
  };
  return $n_s_util_hashing_package$
}
function $p_LDearHenry_BlackAndWhiteChess_BoardSprite__changeTurn__T__V($thiz, message) {
  var newTurn = $p_LDearHenry_BlackAndWhiteChess_BoardSprite__nextTurn__I__I($thiz, $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn);
  $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn = newTurn;
  $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintLeft = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintPeriod
}
function $p_LDearHenry_BlackAndWhiteChess_BoardSprite__nextTurn__I__I($thiz, currentTurn) {
  return ((((1 + currentTurn) | 0) % 2) | 0)
}
function $p_LDearHenry_BlackAndWhiteChess_BoardSprite__stopAnimation__V($thiz) {
  $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationLeft = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationPeriod;
  $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_gameStatus = $m_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$();
  var this$1 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_turnedGrids;
  var i = 0;
  var top = this$1.scm_ArrayBuffer__f_size0;
  while ((i < top)) {
    var arg1 = this$1.scm_ArrayBuffer__f_array.get(i);
    var index = $uI(arg1);
    var this$2 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
    var elem = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnStatus.get($thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn);
    $s_scm_ResizableArray$class__update__scm_ResizableArray__I__O__V(this$2, index, elem);
    i = ((1 + i) | 0)
  };
  var this$3 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_turnedGrids;
  $s_scm_ResizableArray$class__reduceToSize__scm_ResizableArray__I__V(this$3, 0);
  var this$4 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$targetGrids;
  $s_scm_ResizableArray$class__reduceToSize__scm_ResizableArray__I__V(this$4, 0);
  $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_lastPlayedIndex = $m_s_None$();
  $p_LDearHenry_BlackAndWhiteChess_BoardSprite__changeTurn__T__V($thiz, "normal");
  $p_LDearHenry_BlackAndWhiteChess_BoardSprite__shouldStop__V($thiz)
}
function $p_LDearHenry_BlackAndWhiteChess_BoardSprite__shouldStop__V($thiz) {
  if ($p_LDearHenry_BlackAndWhiteChess_BoardSprite__testNextPlay__Z($thiz)) {
    return (void 0)
  };
  if ($p_LDearHenry_BlackAndWhiteChess_BoardSprite__testNextPlay__Z($thiz)) {
    return (void 0)
  };
  $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_flag = true
}
function $p_LDearHenry_BlackAndWhiteChess_BoardSprite__testNextPlay__Z($thiz) {
  var this$1 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints;
  $s_scm_ResizableArray$class__reduceToSize__scm_ResizableArray__I__V(this$1, 0);
  var this$2 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var this$3 = $s_sc_SeqLike$class__indices__sc_SeqLike__sci_Range(this$2);
  if ((!this$3.sci_Range__f_isEmpty)) {
    var i = this$3.sci_Range__f_start;
    while (true) {
      var v1 = i;
      var x1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().IndexToRowCol__I__T2(v1);
      if ((x1 === null)) {
        throw new $c_s_MatchError(x1)
      };
      var row = x1._1$mcI$sp__I();
      var col = x1._2$mcI$sp__I();
      var ret = $thiz.DearHenry$BlackAndWhiteChess$BoardSprite$$play__I__I__Z__Z(row, col, true);
      if (ret) {
        var this$6 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints;
        var array = [v1];
        var n = $uI(array.length);
        var n$1 = ((this$6.scm_ArrayBuffer__f_size0 + n) | 0);
        $s_scm_ResizableArray$class__ensureSize__scm_ResizableArray__I__V(this$6, n$1);
        var xs = this$6.scm_ArrayBuffer__f_array;
        var start = this$6.scm_ArrayBuffer__f_size0;
        var i$1 = 0;
        var j = start;
        var x = $uI(array.length);
        var x$1 = ((x < n) ? x : n);
        var that = ((xs.u.length - start) | 0);
        var end = ((x$1 < that) ? x$1 : that);
        while ((i$1 < end)) {
          var $$x1 = j;
          var index = i$1;
          xs.set($$x1, array[index]);
          i$1 = ((1 + i$1) | 0);
          j = ((1 + j) | 0)
        };
        this$6.scm_ArrayBuffer__f_size0 = ((this$6.scm_ArrayBuffer__f_size0 + n) | 0)
      };
      if ((i === this$3.sci_Range__f_lastElement)) {
        break
      };
      i = ((i + this$3.sci_Range__f_step) | 0)
    }
  };
  var this$15 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints;
  if ($s_sc_IndexedSeqOptimized$class__isEmpty__sc_IndexedSeqOptimized__Z(this$15)) {
    $p_LDearHenry_BlackAndWhiteChess_BoardSprite__changeTurn__T__V($thiz, "cannot play")
  };
  var this$16 = $thiz.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints;
  return (!$s_sc_IndexedSeqOptimized$class__isEmpty__sc_IndexedSeqOptimized__Z(this$16))
}
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_BoardSprite(name, engine) {
  this.LDearHenry_engine_Sprite__f_name = null;
  this.LDearHenry_engine_Sprite__f_engine = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_flag = false;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn = 0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_gameStatus = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_turnedGrids = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$targetGrids = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_lastPlayedIndex = null;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationLeft = 0.0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationPeriod = 0.0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintPeriod = 0.0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintLeft = 0.0;
  $ct_LDearHenry_engine_Sprite__T__LDearHenry_engine_Engine__(this, name, engine);
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_flag = false;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_blackTurn;
  $m_scm_ArrayBuffer$();
  var this$2 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints = this$2;
  $m_scm_ArrayBuffer$();
  var this$4 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids = this$4;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_gameStatus = $m_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$();
  $m_scm_ArrayBuffer$();
  var this$6 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_turnedGrids = this$6;
  $m_scm_ArrayBuffer$();
  var this$8 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$targetGrids = this$8;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_lastPlayedIndex = $m_s_None$();
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationLeft = 0.0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationPeriod = 1500.0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintPeriod = 1000.0;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintLeft = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintPeriod;
  this.DearHenry$BlackAndWhiteChess$BoardSprite$$reset__V()
}
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype = new $h_LDearHenry_engine_Sprite();
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_BoardSprite;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_BoardSprite() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype = $c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype;
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.DearHenry$BlackAndWhiteChess$BoardSprite$$reset__V = (function() {
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_flag = false;
  this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_blackTurn;
  var this$1 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints;
  $s_scm_ResizableArray$class__reduceToSize__scm_ResizableArray__I__V(this$1, 0);
  var this$2 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  $s_scm_ResizableArray$class__reduceToSize__scm_ResizableArray__I__V(this$2, 0);
  var end = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_totalGrids;
  var isEmpty = (end <= 0);
  var lastElement = (isEmpty ? (-1) : (((-1) + end) | 0));
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var this$10 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
      var array = [$m_LDearHenry_BlackAndWhiteChess_Empty$()];
      var n = $uI(array.length);
      var n$1 = ((this$10.scm_ArrayBuffer__f_size0 + n) | 0);
      $s_scm_ResizableArray$class__ensureSize__scm_ResizableArray__I__V(this$10, n$1);
      var xs = this$10.scm_ArrayBuffer__f_array;
      var start = this$10.scm_ArrayBuffer__f_size0;
      var i$1 = 0;
      var j = start;
      var x = $uI(array.length);
      var x$1 = ((x < n) ? x : n);
      var that = ((xs.u.length - start) | 0);
      var end$1 = ((x$1 < that) ? x$1 : that);
      while ((i$1 < end$1)) {
        var $$x1 = j;
        var index = i$1;
        xs.set($$x1, array[index]);
        i$1 = ((1 + i$1) | 0);
        j = ((1 + j) | 0)
      };
      this$10.scm_ArrayBuffer__f_size0 = ((this$10.scm_ArrayBuffer__f_size0 + n) | 0);
      if ((i === lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var this$19 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var idx = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().RowColToIndex__I__I__I((((-1) + (($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows / 2) | 0)) | 0), (((-1) + (($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols / 2) | 0)) | 0));
  var elem = $m_LDearHenry_BlackAndWhiteChess_Black$();
  $s_scm_ResizableArray$class__update__scm_ResizableArray__I__O__V(this$19, idx, elem);
  var this$20 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var idx$1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().RowColToIndex__I__I__I((($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows / 2) | 0), (($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols / 2) | 0));
  var elem$1 = $m_LDearHenry_BlackAndWhiteChess_Black$();
  $s_scm_ResizableArray$class__update__scm_ResizableArray__I__O__V(this$20, idx$1, elem$1);
  var this$21 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var idx$2 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().RowColToIndex__I__I__I((((-1) + (($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows / 2) | 0)) | 0), (($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols / 2) | 0));
  var elem$2 = $m_LDearHenry_BlackAndWhiteChess_White$();
  $s_scm_ResizableArray$class__update__scm_ResizableArray__I__O__V(this$21, idx$2, elem$2);
  var this$22 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var idx$3 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().RowColToIndex__I__I__I((($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows / 2) | 0), (((-1) + (($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols / 2) | 0)) | 0));
  var elem$3 = $m_LDearHenry_BlackAndWhiteChess_White$();
  $s_scm_ResizableArray$class__update__scm_ResizableArray__I__O__V(this$22, idx$3, elem$3);
  $p_LDearHenry_BlackAndWhiteChess_BoardSprite__testNextPlay__Z(this)
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.DearHenry$BlackAndWhiteChess$BoardSprite$$play__I__I__Z__Z = (function(row, col, fake) {
  if ((!$m_LDearHenry_BlackAndWhiteChess_BoardSprite$().valid__I__I__Z(row, col))) {
    return false
  };
  var index = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().RowColToIndex__I__I__I(row, col);
  var this$1 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var x = $s_scm_ResizableArray$class__apply__scm_ResizableArray__I__O(this$1, index);
  var x$2 = $m_LDearHenry_BlackAndWhiteChess_Empty$();
  if ((!((x !== null) && $dp_equals__O__Z(x, x$2)))) {
    return false
  };
  var xs = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_DearHenry$BlackAndWhiteChess$BoardSprite$$directions;
  var elems = null;
  elems = [];
  var i = 0;
  var len = xs.u.length;
  while ((i < len)) {
    var index$1 = i;
    var arg1 = xs.get(index$1);
    var d = $as_T2(arg1);
    var elem = this.DearHenry$BlackAndWhiteChess$BoardSprite$$playOneDirection__I__I__I__I__Z__Z(row, col, d._1$mcI$sp__I(), d._2$mcI$sp__I(), fake);
    elems.push(elem);
    i = ((1 + i) | 0)
  };
  var results = new $ac_Z(elems);
  var i$1 = 0;
  while (true) {
    if ((i$1 < results.u.length)) {
      var idx = i$1;
      var arg1$1 = results.get(idx);
      var $$x1 = ($m_sr_BoxesRunTime$().equals__O__O__Z(arg1$1, true) === false)
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      i$1 = ((1 + i$1) | 0)
    } else {
      break
    }
  };
  var canPlay = (i$1 !== results.u.length);
  if ((canPlay && (!fake))) {
    var this$15 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
    var elem$1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnStatus.get(this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn);
    $s_scm_ResizableArray$class__update__scm_ResizableArray__I__O__V(this$15, index, elem$1);
    this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_lastPlayedIndex = new $c_s_Some(index);
    this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_gameStatus = $m_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$();
    var this$16 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints;
    $s_scm_ResizableArray$class__reduceToSize__scm_ResizableArray__I__V(this$16, 0);
    this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationLeft = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationPeriod
  };
  return canPlay
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.DearHenry$BlackAndWhiteChess$BoardSprite$$playOneDirection__I__I__I__I__Z__Z = (function(row, col, rowDelta, colDelta, fake) {
  $m_s_Predef$().assert__Z__V(((((rowDelta >= (-1)) && (rowDelta <= 1)) && (colDelta >= (-1))) && (colDelta <= 1)));
  $m_s_Predef$().assert__Z__V(((rowDelta !== 0) || (colDelta !== 0)));
  var targetStatus = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnStatus.get(this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn);
  var end = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows;
  var isEmpty = (end <= 1);
  if (isEmpty) {
    var numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var lo = (((-1) + end) | 0);
    var hi$1 = ((lo !== (-1)) ? hi : (((-1) + hi) | 0));
    var hi$2 = (end >> 31);
    var lo$1 = (((-1) + end) | 0);
    var this$8 = $L0;
    if ((!((this$8.RTLong__f_lo === 0) && (this$8.RTLong__f_hi === 0)))) {
      var value = 1
    } else {
      var value = 0
    };
    var hi$4 = (value >> 31);
    var lo$2 = ((lo + value) | 0);
    var hi$5 = ((((-2147483648) ^ lo$2) < ((-2147483648) ^ lo)) ? ((1 + ((hi$1 + hi$4) | 0)) | 0) : ((hi$1 + hi$4) | 0));
    var numRangeElements = (((hi$5 === 0) ? (((-2147483648) ^ lo$2) > (-1)) : (hi$5 > 0)) ? (-1) : lo$2)
  };
  var lastElement = (isEmpty ? 0 : (((-1) + end) | 0));
  $m_sci_IndexedSeq$();
  $m_sc_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  if ((numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(1, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 1;
    while (true) {
      var arg1 = i;
      var elem = new $c_T2$mcII$sp(((row + Math.imul(rowDelta, arg1)) | 0), ((col + Math.imul(colDelta, arg1)) | 0));
      b.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var this$14 = b.result__sci_Vector();
  $m_sci_Vector$();
  var b$1 = new $c_sci_VectorBuilder();
  var this$16 = this$14.iterator__sci_VectorIterator();
  while (this$16.sci_VectorIterator__f__hasNext) {
    var arg1$1 = this$16.next__O();
    var rowCol = $as_T2(arg1$1);
    var this$17 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$();
    if ((this$17.valid__I__I__Z(rowCol._1$mcI$sp__I(), rowCol._2$mcI$sp__I()) !== false)) {
      b$1.$plus$eq__O__sci_VectorBuilder(arg1$1)
    }
  };
  var this$18 = b$1.result__sci_Vector();
  _return$2: {
    $m_sci_Vector$();
    var b$2 = new $c_sci_VectorBuilder();
    var it = this$18.iterator__sci_VectorIterator();
    while (it.sci_VectorIterator__f__hasNext) {
      var x = it.next__O();
      var x$3 = $as_T2(x);
      var x$1 = this.DearHenry$BlackAndWhiteChess$BoardSprite$$getGrid__T2__LDearHenry_BlackAndWhiteChess_GridStatus(x$3);
      var x$2 = $m_LDearHenry_BlackAndWhiteChess_Empty$();
      if ((!(!((x$1 !== null) && (x$1 === x$2))))) {
        var nonEmpties = b$2.result__sci_Vector();
        break _return$2
      };
      b$2.$plus$eq__O__sci_VectorBuilder(x)
    };
    var nonEmpties = b$2.result__sci_Vector()
  };
  var this$20 = nonEmpties.iterator__sci_VectorIterator();
  _return$3: {
    while (this$20.sci_VectorIterator__f__hasNext) {
      var a = this$20.next__O();
      var x$4 = $as_T2(a);
      var x$5 = this.DearHenry$BlackAndWhiteChess$BoardSprite$$getGrid__T2__LDearHenry_BlackAndWhiteChess_GridStatus(x$4);
      if ((x$5 === targetStatus)) {
        var target = new $c_s_Some(a);
        break _return$3
      }
    };
    var target = $m_s_None$()
  };
  if (target.isEmpty__Z()) {
    return false
  };
  _return$4: {
    $m_sci_Vector$();
    var b$3 = new $c_sci_VectorBuilder();
    var it$1 = nonEmpties.iterator__sci_VectorIterator();
    while (it$1.sci_VectorIterator__f__hasNext) {
      var x$6 = it$1.next__O();
      var x$5$1 = $as_T2(x$6);
      var x$7 = this.DearHenry$BlackAndWhiteChess$BoardSprite$$getGrid__T2__LDearHenry_BlackAndWhiteChess_GridStatus(x$5$1);
      if ((!(!(x$7 === targetStatus)))) {
        var this$23 = b$3.result__sci_Vector();
        break _return$4
      };
      b$3.$plus$eq__O__sci_VectorBuilder(x$6)
    };
    var this$23 = b$3.result__sci_Vector()
  };
  $m_sci_IndexedSeq$();
  var bf$1 = $m_sc_IndexedSeq$().sc_IndexedSeq$__f_ReusableCBF;
  var b$4 = $ps_sc_TraversableLike$class__builder$1__sc_TraversableLike__scg_CanBuildFrom__scm_Builder(this$23, bf$1);
  var this$24 = this$23.iterator__sci_VectorIterator();
  while (this$24.sci_VectorIterator__f__hasNext) {
    var arg1$2 = this$24.next__O();
    var rowCol$1 = $as_T2(arg1$2);
    var this$25 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$();
    b$4.$plus$eq__O__scm_Builder(this$25.RowColToIndex__I__I__I(rowCol$1._1$mcI$sp__I(), rowCol$1._2$mcI$sp__I()))
  };
  var hits = $as_sci_IndexedSeq(b$4.result__O());
  if (((!fake) && (!hits.isEmpty__Z()))) {
    var this$26 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_turnedGrids;
    this$26.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer(hits);
    var this$30 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$targetGrids;
    var this$27 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$();
    var rowCol$2 = $as_T2(target.get__O());
    var array = [this$27.RowColToIndex__I__I__I(rowCol$2._1$mcI$sp__I(), rowCol$2._2$mcI$sp__I())];
    var n = $uI(array.length);
    var n$1 = ((this$30.scm_ArrayBuffer__f_size0 + n) | 0);
    $s_scm_ResizableArray$class__ensureSize__scm_ResizableArray__I__V(this$30, n$1);
    var xs = this$30.scm_ArrayBuffer__f_array;
    var start = this$30.scm_ArrayBuffer__f_size0;
    var i$1 = 0;
    var j = start;
    var x$8 = $uI(array.length);
    var x$9 = ((x$8 < n) ? x$8 : n);
    var that = ((xs.u.length - start) | 0);
    var end$1 = ((x$9 < that) ? x$9 : that);
    while ((i$1 < end$1)) {
      var $$x1 = j;
      var index = i$1;
      xs.set($$x1, array[index]);
      i$1 = ((1 + i$1) | 0);
      j = ((1 + j) | 0)
    };
    this$30.scm_ArrayBuffer__f_size0 = ((this$30.scm_ArrayBuffer__f_size0 + n) | 0)
  };
  return (!hits.isEmpty__Z())
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.DearHenry$BlackAndWhiteChess$BoardSprite$$getGrid__T2__LDearHenry_BlackAndWhiteChess_GridStatus = (function(rowCol) {
  $m_s_Predef$().assert__Z__V($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().valid__I__I__Z(rowCol._1$mcI$sp__I(), rowCol._2$mcI$sp__I()));
  var index = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().RowColToIndex__I__I__I(rowCol._1$mcI$sp__I(), rowCol._2$mcI$sp__I());
  var this$1 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  return $as_LDearHenry_BlackAndWhiteChess_GridStatus($s_scm_ResizableArray$class__apply__scm_ResizableArray__I__O(this$1, index))
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.handleEvent__D__D__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(clientX, clientY, context) {
  var x = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_gameStatus;
  var x$2 = $m_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$();
  if ((!((x !== null) && (x === x$2)))) {
    return (void 0)
  };
  var width = $uI(context.canvas.width);
  var height = $uI(context.canvas.height);
  var boardSize = $uD(Math.min(width, height));
  var startX = ((width - boardSize) / 2.0);
  var startY = ((height - boardSize) / 2.0);
  var gridRowSize = (boardSize / $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows);
  var gridColSize = (boardSize / $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols);
  var x$3 = (clientX - startX);
  var y = (clientY - startY);
  var x$1 = (x$3 / gridColSize);
  var colIndex = $doubleToInt($uD(Math.floor(x$1)));
  var x$4 = (y / gridRowSize);
  var rowIndex = $doubleToInt($uD(Math.floor(x$4)));
  this.DearHenry$BlackAndWhiteChess$BoardSprite$$play__I__I__Z__Z(rowIndex, colIndex, false)
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.update__D__V = (function(dt) {
  var x = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_gameStatus;
  var x$2 = $m_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$();
  if (((x !== null) && (x === x$2))) {
    this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationLeft = (this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationLeft - dt);
    if ((this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_animationLeft <= 0.0)) {
      $p_LDearHenry_BlackAndWhiteChess_BoardSprite__stopAnimation__V(this)
    }
  } else if ((this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintLeft > (-this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintPeriod))) {
    this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintLeft = (this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintLeft - dt)
  }
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.paint__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(context) {
  this.paintPanel__Lorg_scalajs_dom_CanvasRenderingContext2D__V(context);
  var x1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().calcPositions__Lorg_scalajs_dom_CanvasRenderingContext2D__T4(context);
  if ((x1 === null)) {
    throw new $c_s_MatchError(x1)
  };
  var startX = $uD(x1.T4__f__1);
  var startY = $uD(x1.T4__f__2);
  var gridSize = $uD(x1.T4__f__3);
  var radius = ((gridSize / 2.0) - $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_lineWidth);
  var s = $m_LDearHenry_engine_Engine$().rgbToHex__I__I__I__T(26, 85, 153);
  context.fillStyle = s;
  var this$2 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_turnedGrids;
  var i = 0;
  var top = this$2.scm_ArrayBuffer__f_size0;
  while ((i < top)) {
    var arg1 = this$2.scm_ArrayBuffer__f_array.get(i);
    var index = $uI(arg1);
    var x1$1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().IndexToRowCol__I__T2(index);
    if ((x1$1 === null)) {
      throw new $c_s_MatchError(x1$1)
    };
    var row = x1$1._1$mcI$sp__I();
    var col = x1$1._2$mcI$sp__I();
    var centerX = ((startX + (col * gridSize)) + (gridSize / 2.0));
    var centerY = ((startY + (row * gridSize)) + (gridSize / 2.0));
    new $c_LDearHenry_engine_Point(centerX, centerY).fillSquare__Lorg_scalajs_dom_CanvasRenderingContext2D__D__V(context, radius);
    i = ((1 + i) | 0)
  };
  var this$3 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var this$4 = $s_sc_SeqLike$class__indices__sc_SeqLike__sci_Range(this$3);
  if ((!this$4.sci_Range__f_isEmpty)) {
    var i$1 = this$4.sci_Range__f_start;
    while (true) {
      var v1 = i$1;
      var this$5 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
      var status = $as_LDearHenry_BlackAndWhiteChess_GridStatus($s_scm_ResizableArray$class__apply__scm_ResizableArray__I__O(this$5, v1));
      var x$2 = $m_LDearHenry_BlackAndWhiteChess_Empty$();
      if ((!((status !== null) && (status === x$2)))) {
        var s$1 = status.color__T();
        context.fillStyle = s$1;
        var x1$2 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().IndexToRowCol__I__T2(v1);
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2)
        };
        var row$1 = x1$2._1$mcI$sp__I();
        var col$1 = x1$2._2$mcI$sp__I();
        var centerX$1 = ((startX + (col$1 * gridSize)) + (gridSize / 2.0));
        var centerY$1 = ((startY + (row$1 * gridSize)) + (gridSize / 2.0));
        context.beginPath();
        context.arc(centerX$1, centerY$1, radius, 0.0, 6.283185307179586, false);
        context.fill();
        context.closePath()
      };
      if ((i$1 === this$4.sci_Range__f_lastElement)) {
        break
      };
      i$1 = ((i$1 + this$4.sci_Range__f_step) | 0)
    }
  };
  var this$7 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_lastPlayedIndex;
  if ((!this$7.isEmpty__Z())) {
    var v1$1 = this$7.get__O();
    var index$1 = $uI(v1$1);
    var s$2 = $m_LDearHenry_engine_Engine$().rgbToHex__I__I__I__T(26, 85, 153);
    context.strokeStyle = s$2;
    context.lineWidth = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_lineWidth;
    var this$9 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$targetGrids;
    var i$2 = 0;
    var top$1 = this$9.scm_ArrayBuffer__f_size0;
    while ((i$2 < top$1)) {
      var arg1$1 = this$9.scm_ArrayBuffer__f_array.get(i$2);
      var x$13 = $uI(arg1$1);
      var x1$3 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().IndexToRowCol__I__T2(index$1);
      if ((x1$3 === null)) {
        throw new $c_s_MatchError(x1$3)
      };
      var row$2 = x1$3._1$mcI$sp__I();
      var col$2 = x1$3._2$mcI$sp__I();
      var _1$mcD$sp = ((startX + (col$2 * gridSize)) + (gridSize / 2.0));
      var _2$mcD$sp = ((startY + (row$2 * gridSize)) + (gridSize / 2.0));
      var x1$3$1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().IndexToRowCol__I__T2(x$13);
      if ((x1$3$1 === null)) {
        throw new $c_s_MatchError(x1$3$1)
      };
      var row$3 = x1$3$1._1$mcI$sp__I();
      var col$3 = x1$3$1._2$mcI$sp__I();
      var _1$mcD$sp$1 = ((startX + (col$3 * gridSize)) + (gridSize / 2.0));
      var _2$mcD$sp$1 = ((startY + (row$3 * gridSize)) + (gridSize / 2.0));
      context.beginPath();
      context.moveTo(_1$mcD$sp, _2$mcD$sp);
      context.lineTo(_1$mcD$sp$1, _2$mcD$sp$1);
      context.stroke();
      i$2 = ((1 + i$2) | 0)
    }
  };
  if ((this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_hintLeft <= 0.0)) {
    var s$3 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_hintColor;
    context.fillStyle = s$3;
    var this$11 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$hints;
    var i$3 = 0;
    var top$2 = this$11.scm_ArrayBuffer__f_size0;
    while ((i$3 < top$2)) {
      var arg1$2 = this$11.scm_ArrayBuffer__f_array.get(i$3);
      var index$2 = $uI(arg1$2);
      var x1$4 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().IndexToRowCol__I__T2(index$2);
      if ((x1$4 === null)) {
        throw new $c_s_MatchError(x1$4)
      };
      var row$4 = x1$4._1$mcI$sp__I();
      var col$4 = x1$4._2$mcI$sp__I();
      var centerX$2 = ((startX + (col$4 * gridSize)) + (gridSize / 2.0));
      var centerY$2 = ((startY + (row$4 * gridSize)) + (gridSize / 2.0));
      new $c_LDearHenry_engine_Point(centerX$2, centerY$2).fillCircle__Lorg_scalajs_dom_CanvasRenderingContext2D__D__V(context, (radius / 2.0));
      i$3 = ((1 + i$3) | 0)
    }
  };
  if (this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_flag) {
    this.LDearHenry_engine_Sprite__f_engine.schedule__F0__V(new $c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4(this));
    this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_flag = false
  }
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.paintPanel__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(context) {
  var x1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().calcPanels__Lorg_scalajs_dom_CanvasRenderingContext2D__T2(context);
  if ((x1 === null)) {
    throw new $c_s_MatchError(x1)
  };
  var blackRect = $as_LDearHenry_engine_Rectangle(x1._1__O());
  var whiteRect = $as_LDearHenry_engine_Rectangle(x1._2__O());
  var this$1 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var elem = 0;
  elem = 0;
  var i = 0;
  var top = this$1.scm_ArrayBuffer__f_size0;
  while ((i < top)) {
    var arg1 = this$1.scm_ArrayBuffer__f_array.get(i);
    var x$18 = $as_LDearHenry_BlackAndWhiteChess_GridStatus(arg1);
    var x$2 = $m_LDearHenry_BlackAndWhiteChess_Black$();
    if (((x$18 !== null) && (x$18 === x$2))) {
      elem = ((1 + elem) | 0)
    };
    i = ((1 + i) | 0)
  };
  var blackCount = elem;
  var this$3 = this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var elem$1 = 0;
  elem$1 = 0;
  var i$1 = 0;
  var top$1 = this$3.scm_ArrayBuffer__f_size0;
  while ((i$1 < top$1)) {
    var arg1$1 = this$3.scm_ArrayBuffer__f_array.get(i$1);
    var x$19 = $as_LDearHenry_BlackAndWhiteChess_GridStatus(arg1$1);
    var x$2$1 = $m_LDearHenry_BlackAndWhiteChess_White$();
    if (((x$19 !== null) && (x$19 === x$2$1))) {
      elem$1 = ((1 + elem$1) | 0)
    };
    i$1 = ((1 + i$1) | 0)
  };
  var whiteCount = elem$1;
  new $c_LDearHenry_BlackAndWhiteChess_Panel(blackRect, $m_LDearHenry_BlackAndWhiteChess_Black$(), blackCount, (this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn === $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_blackTurn)).paint__Lorg_scalajs_dom_CanvasRenderingContext2D__V(context);
  new $c_LDearHenry_BlackAndWhiteChess_Panel(whiteRect, $m_LDearHenry_BlackAndWhiteChess_White$(), whiteCount, (this.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$turn === $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_whiteTurn)).paint__Lorg_scalajs_dom_CanvasRenderingContext2D__V(context)
});
var $d_LDearHenry_BlackAndWhiteChess_BoardSprite = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_BoardSprite: 0
}, false, "DearHenry.BlackAndWhiteChess.BoardSprite", {
  LDearHenry_BlackAndWhiteChess_BoardSprite: 1,
  LDearHenry_engine_Sprite: 1,
  O: 1
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_BoardSprite;
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_Game(gameName, canvasId) {
  this.LDearHenry_engine_Engine__f_gameName = null;
  this.LDearHenry_engine_Engine__f_canvasId = null;
  this.LDearHenry_engine_Engine__f_canvas = null;
  this.LDearHenry_engine_Engine__f_context = null;
  this.LDearHenry_engine_Engine__f_scheduleQueue = null;
  this.LDearHenry_engine_Engine__f_window = null;
  this.LDearHenry_engine_Engine__f_lastTime = 0.0;
  this.LDearHenry_engine_Engine__f_deltaTime = 0.0;
  this.LDearHenry_engine_Engine__f_fps = 0.0;
  this.LDearHenry_engine_Engine__f_sprites = null;
  this.LDearHenry_engine_Engine__f_keyAndListeners = null;
  this.LDearHenry_BlackAndWhiteChess_Game__f_DearHenry$BlackAndWhiteChess$Game$$board = null;
  $ct_LDearHenry_engine_Engine__T__T__(this, gameName, canvasId);
  this.LDearHenry_BlackAndWhiteChess_Game__f_DearHenry$BlackAndWhiteChess$Game$$board = new $c_LDearHenry_BlackAndWhiteChess_BoardSprite("board", this);
  this.addSprite__LDearHenry_engine_Sprite__V(this.LDearHenry_BlackAndWhiteChess_Game__f_DearHenry$BlackAndWhiteChess$Game$$board);
  window.onmousedown = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((arg$outer) => ((e$2) => {
    arg$outer.LDearHenry_BlackAndWhiteChess_Game__f_DearHenry$BlackAndWhiteChess$Game$$board.handleEvent__D__D__Lorg_scalajs_dom_CanvasRenderingContext2D__V($uD(e$2.clientX), $uD(e$2.clientY), arg$outer.LDearHenry_engine_Engine__f_context)
  }))(this)));
  window.addEventListener("touchstart", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((arg$outer$1) => ((e$2$1) => {
    arg$outer$1.LDearHenry_BlackAndWhiteChess_Game__f_DearHenry$BlackAndWhiteChess$Game$$board.handleEvent__D__D__Lorg_scalajs_dom_CanvasRenderingContext2D__V($uD(e$2$1.touches[0].clientX), $uD(e$2$1.touches[0].clientY), arg$outer$1.LDearHenry_engine_Engine__f_context)
  }))(this))))
}
$c_LDearHenry_BlackAndWhiteChess_Game.prototype = new $h_LDearHenry_engine_Engine();
$c_LDearHenry_BlackAndWhiteChess_Game.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_Game;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_Game() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_Game.prototype = $c_LDearHenry_BlackAndWhiteChess_Game.prototype;
$c_LDearHenry_BlackAndWhiteChess_Game.prototype.paintUnderSprites__V = (function() {
  var x1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().calcPositions__Lorg_scalajs_dom_CanvasRenderingContext2D__T4(this.LDearHenry_engine_Engine__f_context);
  if ((x1 === null)) {
    throw new $c_s_MatchError(x1)
  };
  var startX = $uD(x1.T4__f__1);
  var startY = $uD(x1.T4__f__2);
  var gridSize = $uD(x1.T4__f__3);
  var boardSize = $uD(x1.T4__f__4);
  var $$x1 = this.LDearHenry_engine_Engine__f_context;
  var s = $m_LDearHenry_engine_Engine$().rgbToHex__I__I__I__T(211, 162, 55);
  $$x1.fillStyle = s;
  this.LDearHenry_engine_Engine__f_context.fillRect(startX, startY, boardSize, boardSize);
  this.LDearHenry_engine_Engine__f_context.strokeStyle = "black";
  this.LDearHenry_engine_Engine__f_context.lineWidth = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_lineWidth;
  var end = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nRows;
  var isEmpty = (end < 0);
  var lastElement = (isEmpty ? (-1) : end);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var v1 = i;
      this.LDearHenry_engine_Engine__f_context.beginPath();
      var y = (startY + (v1 * gridSize));
      this.LDearHenry_engine_Engine__f_context.moveTo(startX, y);
      this.LDearHenry_engine_Engine__f_context.lineTo((startX + boardSize), y);
      this.LDearHenry_engine_Engine__f_context.stroke();
      if ((i === lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var end$1 = $m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_nCols;
  var isEmpty$1 = (end$1 < 0);
  var lastElement$1 = (isEmpty$1 ? (-1) : end$1);
  if ((!isEmpty$1)) {
    var i$1 = 0;
    while (true) {
      var v1$1 = i$1;
      this.LDearHenry_engine_Engine__f_context.beginPath();
      var x = (startX + (v1$1 * gridSize));
      this.LDearHenry_engine_Engine__f_context.moveTo(x, startY);
      this.LDearHenry_engine_Engine__f_context.lineTo(x, (startY + boardSize));
      this.LDearHenry_engine_Engine__f_context.stroke();
      if ((i$1 === lastElement$1)) {
        break
      };
      i$1 = ((1 + i$1) | 0)
    }
  }
});
var $d_LDearHenry_BlackAndWhiteChess_Game = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_Game: 0
}, false, "DearHenry.BlackAndWhiteChess.Game", {
  LDearHenry_BlackAndWhiteChess_Game: 1,
  LDearHenry_engine_Engine: 1,
  O: 1
});
$c_LDearHenry_BlackAndWhiteChess_Game.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_Game;
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_MIN_VALUE = 0;
  this.jl_Character$__f_MAX_VALUE = 0;
  this.jl_Character$__f_SIZE = 0;
  this.jl_Character$__f_BYTES = 0;
  this.jl_Character$__f_MIN_RADIX = 0;
  this.jl_Character$__f_MAX_RADIX = 0;
  this.jl_Character$__f_MIN_HIGH_SURROGATE = 0;
  this.jl_Character$__f_MAX_HIGH_SURROGATE = 0;
  this.jl_Character$__f_MIN_LOW_SURROGATE = 0;
  this.jl_Character$__f_MAX_LOW_SURROGATE = 0;
  this.jl_Character$__f_MIN_SURROGATE = 0;
  this.jl_Character$__f_MAX_SURROGATE = 0;
  this.jl_Character$__f_MIN_CODE_POINT = 0;
  this.jl_Character$__f_MAX_CODE_POINT = 0;
  this.jl_Character$__f_MIN_SUPPLEMENTARY_CODE_POINT = 0;
  this.jl_Character$__f_HighSurrogateMask = 0;
  this.jl_Character$__f_HighSurrogateID = 0;
  this.jl_Character$__f_LowSurrogateMask = 0;
  this.jl_Character$__f_LowSurrogateID = 0;
  this.jl_Character$__f_SurrogateMask = 0;
  this.jl_Character$__f_SurrogateID = 0;
  this.jl_Character$__f_SurrogateUsefulPartMask = 0;
  this.jl_Character$__f_SurrogatePairMask = 0;
  this.jl_Character$__f_SurrogatePairID = 0;
  this.jl_Character$__f_HighSurrogateShift = 0;
  this.jl_Character$__f_HighSurrogateAddValue = 0;
  this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
  this.jl_Character$__f_charTypeIndices = null;
  this.jl_Character$__f_charTypes = null;
  this.jl_Character$__f_isMirroredIndices = null;
  this.jl_Character$__f_CombiningClassIsNone = 0;
  this.jl_Character$__f_CombiningClassIsAbove = 0;
  this.jl_Character$__f_CombiningClassIsOther = 0;
  this.jl_Character$__f_combiningClassNoneOrAboveOrOtherIndices = null;
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.toString__I__T = (function(codePoint) {
  if (((codePoint >= 0) && (codePoint < 65536))) {
    return $as_T(String.fromCharCode(codePoint))
  } else if (((codePoint >= 0) && (codePoint <= 1114111))) {
    return $as_T(String.fromCharCode((65535 & (55296 | (((-64) + (codePoint >> 10)) | 0))), (65535 & (56320 | (1023 & codePoint)))))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
/** @constructor */
function $c_jl_Integer$() {
  this.jl_Integer$__f_MIN_VALUE = 0;
  this.jl_Integer$__f_MAX_VALUE = 0;
  this.jl_Integer$__f_SIZE = 0;
  this.jl_Integer$__f_BYTES = 0
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.bitCount__I__I = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
});
$c_jl_Integer$.prototype.reverseBytes__I__I = (function(i) {
  var byte3 = ((i >>> 24) | 0);
  var byte2 = (65280 & ((i >>> 8) | 0));
  var byte1 = (16711680 & (i << 8));
  var byte0 = (i << 24);
  return (((byte0 | byte1) | byte2) | byte3)
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else if ((Error.captureStackTrace === (void 0))) {
      var e = new Error();
      this.jl_Throwable__f_stackTraceStateInternal = e
    } else {
      Error.captureStackTrace(this);
      this.jl_Throwable__f_stackTraceStateInternal = this
    };
    return this
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
/** @constructor */
function $c_s_Predef$$anon$3() {
  /*<skip>*/
}
$c_s_Predef$$anon$3.prototype = new $h_O();
$c_s_Predef$$anon$3.prototype.constructor = $c_s_Predef$$anon$3;
/** @constructor */
function $h_s_Predef$$anon$3() {
  /*<skip>*/
}
$h_s_Predef$$anon$3.prototype = $c_s_Predef$$anon$3.prototype;
$c_s_Predef$$anon$3.prototype.apply__scm_Builder = (function() {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
});
$c_s_Predef$$anon$3.prototype.apply__O__scm_Builder = (function(from) {
  $as_T(from);
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
});
var $d_s_Predef$$anon$3 = new $TypeData().initClass({
  s_Predef$$anon$3: 0
}, false, "scala.Predef$$anon$3", {
  s_Predef$$anon$3: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_s_Predef$$anon$3.prototype.$classData = $d_s_Predef$$anon$3;
function $is_sc_TraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_TraversableOnce)))
}
function $as_sc_TraversableOnce(obj) {
  return (($is_sc_TraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce"))
}
function $isArrayOf_sc_TraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce)))
}
function $asArrayOf_sc_TraversableOnce(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce;", depth))
}
/** @constructor */
function $c_scg_GenSetFactory() {
  /*<skip>*/
}
$c_scg_GenSetFactory.prototype = new $h_scg_GenericCompanion();
$c_scg_GenSetFactory.prototype.constructor = $c_scg_GenSetFactory;
/** @constructor */
function $h_scg_GenSetFactory() {
  /*<skip>*/
}
$h_scg_GenSetFactory.prototype = $c_scg_GenSetFactory.prototype;
function $ct_scg_GenTraversableFactory__($thiz) {
  $thiz.scg_GenTraversableFactory__f_ReusableCBFInstance = new $c_scg_GenTraversableFactory$$anon$1($thiz);
  return $thiz
}
/** @constructor */
function $c_scg_GenTraversableFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_GenTraversableFactory.prototype = new $h_scg_GenericCompanion();
$c_scg_GenTraversableFactory.prototype.constructor = $c_scg_GenTraversableFactory;
/** @constructor */
function $h_scg_GenTraversableFactory() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory.prototype = $c_scg_GenTraversableFactory.prototype;
function $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__($thiz, outer) {
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = outer
  };
  return $thiz
}
/** @constructor */
function $c_scg_GenTraversableFactory$GenericCanBuildFrom() {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null
}
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype = new $h_O();
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.constructor = $c_scg_GenTraversableFactory$GenericCanBuildFrom;
/** @constructor */
function $h_scg_GenTraversableFactory$GenericCanBuildFrom() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory$GenericCanBuildFrom.prototype = $c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype;
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__scm_Builder = (function() {
  return this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer.newBuilder__scm_Builder()
});
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__O__scm_Builder = (function(from) {
  var from$1 = $as_sc_GenTraversable(from);
  return from$1.companion__scg_GenericCompanion().newBuilder__scm_Builder()
});
function $is_scg_Growable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scg_Growable)))
}
function $as_scg_Growable(obj) {
  return (($is_scg_Growable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.generic.Growable"))
}
function $isArrayOf_scg_Growable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scg_Growable)))
}
function $asArrayOf_scg_Growable(obj, depth) {
  return (($isArrayOf_scg_Growable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.generic.Growable;", depth))
}
/** @constructor */
function $c_scg_MapFactory() {
  /*<skip>*/
}
$c_scg_MapFactory.prototype = new $h_scg_GenMapFactory();
$c_scg_MapFactory.prototype.constructor = $c_scg_MapFactory;
/** @constructor */
function $h_scg_MapFactory() {
  /*<skip>*/
}
$h_scg_MapFactory.prototype = $c_scg_MapFactory.prototype;
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.apply$mcV$sp__V = (function() {
  this.apply__O()
});
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.sr_BooleanRef__f_elem = false;
  this.sr_BooleanRef__f_elem = elem
}
$c_sr_BooleanRef.prototype = new $h_O();
$c_sr_BooleanRef.prototype.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
  /*<skip>*/
}
$h_sr_BooleanRef.prototype = $c_sr_BooleanRef.prototype;
$c_sr_BooleanRef.prototype.toString__T = (function() {
  var b = this.sr_BooleanRef__f_elem;
  return ("" + b)
});
var $d_sr_BooleanRef = new $TypeData().initClass({
  sr_BooleanRef: 0
}, false, "scala.runtime.BooleanRef", {
  sr_BooleanRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_BooleanRef.prototype.$classData = $d_sr_BooleanRef;
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
  /*<skip>*/
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i)
});
var $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_arraySeed = 0;
  this.s_util_hashing_MurmurHash3$__f_stringSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_productSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_symmetricSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_traversableSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set")
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ((xs instanceof $c_sci_List)) {
    var x2 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_TraversableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  this.s_Console$__f_errVar = null;
  this.s_Console$__f_inVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
  this.s_Console$__f_errVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_err);
  this.s_Console$__f_inVar = new $c_s_util_DynamicVariable(null)
}
$c_s_Console$.prototype = new $h_s_DeprecatedConsole();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
  /*<skip>*/
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
var $d_s_Console$ = new $TypeData().initClass({
  s_Console$: 0
}, false, "scala.Console$", {
  s_Console$: 1,
  s_DeprecatedConsole: 1,
  O: 1,
  s_io_AnsiColor: 1
});
$c_s_Console$.prototype.$classData = $d_s_Console$;
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$()
  };
  return $n_s_Console$
}
/** @constructor */
function $c_s_Predef$() {
  this.s_Predef$__f_Map = null;
  this.s_Predef$__f_Set = null;
  this.s_Predef$__f_ClassManifest = null;
  this.s_Predef$__f_Manifest = null;
  this.s_Predef$__f_NoManifest = null;
  this.s_Predef$__f_StringCanBuildFrom = null;
  this.s_Predef$__f_singleton_$less$colon$less = null;
  this.s_Predef$__f_scala$Predef$$singleton_$eq$colon$eq = null;
  $n_s_Predef$ = this;
  $m_s_package$();
  $m_sci_List$();
  this.s_Predef$__f_Map = $m_sci_Map$();
  this.s_Predef$__f_Set = $m_sci_Set$();
  this.s_Predef$__f_ClassManifest = $m_s_reflect_package$().s_reflect_package$__f_ClassManifest;
  this.s_Predef$__f_Manifest = $m_s_reflect_package$().s_reflect_package$__f_Manifest;
  this.s_Predef$__f_NoManifest = $m_s_reflect_NoManifest$();
  this.s_Predef$__f_StringCanBuildFrom = new $c_s_Predef$$anon$3();
  this.s_Predef$__f_singleton_$less$colon$less = new $c_s_Predef$$anon$1();
  this.s_Predef$__f_scala$Predef$$singleton_$eq$colon$eq = new $c_s_Predef$$anon$2()
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
  /*<skip>*/
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
$c_s_Predef$.prototype.assert__Z__V = (function(assertion) {
  if ((!assertion)) {
    throw new $c_jl_AssertionError("assertion failed")
  }
});
$c_s_Predef$.prototype.require__Z__V = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
  }
});
var $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  O: 1,
  s_DeprecatedPredef: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
function $p_s_StringContext$__treatEscapes0__T__Z__T($thiz, str, strict) {
  var len = $uI(str.length);
  var x1 = $f_T__indexOf__I__I(str, 92);
  return ((x1 === (-1)) ? str : $p_s_StringContext$__replace$1__I__T__Z__I__T($thiz, x1, str, strict, len))
}
function $p_s_StringContext$__loop$1__I__I__T__Z__I__jl_StringBuilder__T($thiz, i, next, str$1, strict$1, len$1, b$1) {
  while ((next >= 0)) {
    if ((next > i)) {
      b$1.append__jl_CharSequence__I__I__jl_StringBuilder(str$1, i, next)
    };
    var idx = ((1 + next) | 0);
    if ((idx >= len$1)) {
      throw new $c_s_StringContext$InvalidEscapeException(str$1, next)
    };
    var index = idx;
    var x1 = (65535 & $uI(str$1.charCodeAt(index)));
    switch (x1) {
      case 98: {
        var c = 8;
        break
      }
      case 116: {
        var c = 9;
        break
      }
      case 110: {
        var c = 10;
        break
      }
      case 102: {
        var c = 12;
        break
      }
      case 114: {
        var c = 13;
        break
      }
      case 34: {
        var c = 34;
        break
      }
      case 39: {
        var c = 39;
        break
      }
      case 92: {
        var c = 92;
        break
      }
      default: {
        if (((x1 >= 48) && (x1 <= 55))) {
          if (strict$1) {
            throw new $c_s_StringContext$InvalidEscapeException(str$1, next)
          };
          var index$1 = idx;
          var leadch = (65535 & $uI(str$1.charCodeAt(index$1)));
          var oct = (((-48) + leadch) | 0);
          idx = ((1 + idx) | 0);
          if ((idx < len$1)) {
            var index$2 = idx;
            var $$x2 = ((65535 & $uI(str$1.charCodeAt(index$2))) >= 48)
          } else {
            var $$x2 = false
          };
          if ($$x2) {
            var index$3 = idx;
            var $$x1 = ((65535 & $uI(str$1.charCodeAt(index$3))) <= 55)
          } else {
            var $$x1 = false
          };
          if ($$x1) {
            var $$x3 = oct;
            var index$4 = idx;
            oct = (((-48) + ((($$x3 << 3) + (65535 & $uI(str$1.charCodeAt(index$4)))) | 0)) | 0);
            idx = ((1 + idx) | 0);
            if (((idx < len$1) && (leadch <= 51))) {
              var index$5 = idx;
              var $$x5 = ((65535 & $uI(str$1.charCodeAt(index$5))) >= 48)
            } else {
              var $$x5 = false
            };
            if ($$x5) {
              var index$6 = idx;
              var $$x4 = ((65535 & $uI(str$1.charCodeAt(index$6))) <= 55)
            } else {
              var $$x4 = false
            };
            if ($$x4) {
              var $$x6 = oct;
              var index$7 = idx;
              oct = (((-48) + ((($$x6 << 3) + (65535 & $uI(str$1.charCodeAt(index$7)))) | 0)) | 0);
              idx = ((1 + idx) | 0)
            }
          };
          idx = (((-1) + idx) | 0);
          var c = (65535 & oct)
        } else {
          var c;
          throw new $c_s_StringContext$InvalidEscapeException(str$1, next)
        }
      }
    };
    idx = ((1 + idx) | 0);
    var str = $as_T(String.fromCharCode(c));
    b$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    var temp$i = idx;
    var temp$next = $f_T__indexOf__I__I__I(str$1, 92, idx);
    i = temp$i;
    next = temp$next
  };
  if ((i < len$1)) {
    b$1.append__jl_CharSequence__I__I__jl_StringBuilder(str$1, i, len$1)
  };
  return b$1.jl_StringBuilder__f_java$lang$StringBuilder$$content
}
function $p_s_StringContext$__replace$1__I__T__Z__I__T($thiz, first, str$1, strict$1, len$1) {
  var b = $ct_jl_StringBuilder__(new $c_jl_StringBuilder());
  return $p_s_StringContext$__loop$1__I__I__T__Z__I__jl_StringBuilder__T($thiz, 0, first, str$1, strict$1, len$1, b)
}
/** @constructor */
function $c_s_StringContext$() {
  /*<skip>*/
}
$c_s_StringContext$.prototype = new $h_O();
$c_s_StringContext$.prototype.constructor = $c_s_StringContext$;
/** @constructor */
function $h_s_StringContext$() {
  /*<skip>*/
}
$h_s_StringContext$.prototype = $c_s_StringContext$.prototype;
var $d_s_StringContext$ = new $TypeData().initClass({
  s_StringContext$: 0
}, false, "scala.StringContext$", {
  s_StringContext$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_StringContext$.prototype.$classData = $d_s_StringContext$;
var $n_s_StringContext$;
function $m_s_StringContext$() {
  if ((!$n_s_StringContext$)) {
    $n_s_StringContext$ = new $c_s_StringContext$()
  };
  return $n_s_StringContext$
}
/** @constructor */
function $c_sc_IndexedSeq$$anon$1() {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null;
  $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, $m_sc_IndexedSeq$())
}
$c_sc_IndexedSeq$$anon$1.prototype = new $h_scg_GenTraversableFactory$GenericCanBuildFrom();
$c_sc_IndexedSeq$$anon$1.prototype.constructor = $c_sc_IndexedSeq$$anon$1;
/** @constructor */
function $h_sc_IndexedSeq$$anon$1() {
  /*<skip>*/
}
$h_sc_IndexedSeq$$anon$1.prototype = $c_sc_IndexedSeq$$anon$1.prototype;
$c_sc_IndexedSeq$$anon$1.prototype.apply__scm_Builder = (function() {
  $m_sc_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  return new $c_sci_VectorBuilder()
});
var $d_sc_IndexedSeq$$anon$1 = new $TypeData().initClass({
  sc_IndexedSeq$$anon$1: 0
}, false, "scala.collection.IndexedSeq$$anon$1", {
  sc_IndexedSeq$$anon$1: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_sc_IndexedSeq$$anon$1.prototype.$classData = $d_sc_IndexedSeq$$anon$1;
/** @constructor */
function $c_scg_GenSeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_GenSeqFactory.prototype = new $h_scg_GenTraversableFactory();
$c_scg_GenSeqFactory.prototype.constructor = $c_scg_GenSeqFactory;
/** @constructor */
function $h_scg_GenSeqFactory() {
  /*<skip>*/
}
$h_scg_GenSeqFactory.prototype = $c_scg_GenSeqFactory.prototype;
/** @constructor */
function $c_scg_GenTraversableFactory$$anon$1(outer) {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null;
  this.scg_GenTraversableFactory$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.scg_GenTraversableFactory$$anon$1__f_$outer = outer
  };
  $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, outer)
}
$c_scg_GenTraversableFactory$$anon$1.prototype = new $h_scg_GenTraversableFactory$GenericCanBuildFrom();
$c_scg_GenTraversableFactory$$anon$1.prototype.constructor = $c_scg_GenTraversableFactory$$anon$1;
/** @constructor */
function $h_scg_GenTraversableFactory$$anon$1() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory$$anon$1.prototype = $c_scg_GenTraversableFactory$$anon$1.prototype;
$c_scg_GenTraversableFactory$$anon$1.prototype.apply__scm_Builder = (function() {
  return this.scg_GenTraversableFactory$$anon$1__f_$outer.newBuilder__scm_Builder()
});
var $d_scg_GenTraversableFactory$$anon$1 = new $TypeData().initClass({
  scg_GenTraversableFactory$$anon$1: 0
}, false, "scala.collection.generic.GenTraversableFactory$$anon$1", {
  scg_GenTraversableFactory$$anon$1: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenTraversableFactory$$anon$1.prototype.$classData = $d_scg_GenTraversableFactory$$anon$1;
/** @constructor */
function $c_scg_ImmutableMapFactory() {
  /*<skip>*/
}
$c_scg_ImmutableMapFactory.prototype = new $h_scg_MapFactory();
$c_scg_ImmutableMapFactory.prototype.constructor = $c_scg_ImmutableMapFactory;
/** @constructor */
function $h_scg_ImmutableMapFactory() {
  /*<skip>*/
}
$h_scg_ImmutableMapFactory.prototype = $c_scg_ImmutableMapFactory.prototype;
/** @constructor */
function $c_sci_$colon$colon$() {
  /*<skip>*/
}
$c_sci_$colon$colon$.prototype = new $h_O();
$c_sci_$colon$colon$.prototype.constructor = $c_sci_$colon$colon$;
/** @constructor */
function $h_sci_$colon$colon$() {
  /*<skip>*/
}
$h_sci_$colon$colon$.prototype = $c_sci_$colon$colon$.prototype;
$c_sci_$colon$colon$.prototype.toString__T = (function() {
  return "::"
});
var $d_sci_$colon$colon$ = new $TypeData().initClass({
  sci_$colon$colon$: 0
}, false, "scala.collection.immutable.$colon$colon$", {
  sci_$colon$colon$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon$.prototype.$classData = $d_sci_$colon$colon$;
var $n_sci_$colon$colon$;
function $m_sci_$colon$colon$() {
  if ((!$n_sci_$colon$colon$)) {
    $n_sci_$colon$colon$ = new $c_sci_$colon$colon$()
  };
  return $n_sci_$colon$colon$
}
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step)
}
/** @constructor */
function $c_sci_Range$() {
  this.sci_Range$__f_MAX_PRINT = 0;
  this.sci_Range$__f_MAX_PRINT = 512
}
$c_sci_Range$.prototype = new $h_O();
$c_sci_Range$.prototype.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
  /*<skip>*/
}
$h_sci_Range$.prototype = $c_sci_Range$.prototype;
$c_sci_Range$.prototype.scala$collection$immutable$Range$$fail__I__I__I__Z__E = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."))
});
var $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
/** @constructor */
function $c_sci_Stream$StreamCanBuildFrom() {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null;
  $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, $m_sci_Stream$())
}
$c_sci_Stream$StreamCanBuildFrom.prototype = new $h_scg_GenTraversableFactory$GenericCanBuildFrom();
$c_sci_Stream$StreamCanBuildFrom.prototype.constructor = $c_sci_Stream$StreamCanBuildFrom;
/** @constructor */
function $h_sci_Stream$StreamCanBuildFrom() {
  /*<skip>*/
}
$h_sci_Stream$StreamCanBuildFrom.prototype = $c_sci_Stream$StreamCanBuildFrom.prototype;
var $d_sci_Stream$StreamCanBuildFrom = new $TypeData().initClass({
  sci_Stream$StreamCanBuildFrom: 0
}, false, "scala.collection.immutable.Stream$StreamCanBuildFrom", {
  sci_Stream$StreamCanBuildFrom: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_sci_Stream$StreamCanBuildFrom.prototype.$classData = $d_sci_Stream$StreamCanBuildFrom;
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
/** @constructor */
function $c_scm_StringBuilder$() {
  /*<skip>*/
}
$c_scm_StringBuilder$.prototype = new $h_O();
$c_scm_StringBuilder$.prototype.constructor = $c_scm_StringBuilder$;
/** @constructor */
function $h_scm_StringBuilder$() {
  /*<skip>*/
}
$h_scm_StringBuilder$.prototype = $c_scm_StringBuilder$.prototype;
var $d_scm_StringBuilder$ = new $TypeData().initClass({
  scm_StringBuilder$: 0
}, false, "scala.collection.mutable.StringBuilder$", {
  scm_StringBuilder$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder$.prototype.$classData = $d_scm_StringBuilder$;
var $n_scm_StringBuilder$;
function $m_scm_StringBuilder$() {
  if ((!$n_scm_StringBuilder$)) {
    $n_scm_StringBuilder$ = new $c_scm_StringBuilder$()
  };
  return $n_scm_StringBuilder$
}
/** @constructor */
function $c_s_math_Fractional$() {
  /*<skip>*/
}
$c_s_math_Fractional$.prototype = new $h_O();
$c_s_math_Fractional$.prototype.constructor = $c_s_math_Fractional$;
/** @constructor */
function $h_s_math_Fractional$() {
  /*<skip>*/
}
$h_s_math_Fractional$.prototype = $c_s_math_Fractional$.prototype;
var $d_s_math_Fractional$ = new $TypeData().initClass({
  s_math_Fractional$: 0
}, false, "scala.math.Fractional$", {
  s_math_Fractional$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Fractional$.prototype.$classData = $d_s_math_Fractional$;
var $n_s_math_Fractional$;
function $m_s_math_Fractional$() {
  if ((!$n_s_math_Fractional$)) {
    $n_s_math_Fractional$ = new $c_s_math_Fractional$()
  };
  return $n_s_math_Fractional$
}
/** @constructor */
function $c_s_math_Integral$() {
  /*<skip>*/
}
$c_s_math_Integral$.prototype = new $h_O();
$c_s_math_Integral$.prototype.constructor = $c_s_math_Integral$;
/** @constructor */
function $h_s_math_Integral$() {
  /*<skip>*/
}
$h_s_math_Integral$.prototype = $c_s_math_Integral$.prototype;
var $d_s_math_Integral$ = new $TypeData().initClass({
  s_math_Integral$: 0
}, false, "scala.math.Integral$", {
  s_math_Integral$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Integral$.prototype.$classData = $d_s_math_Integral$;
var $n_s_math_Integral$;
function $m_s_math_Integral$() {
  if ((!$n_s_math_Integral$)) {
    $n_s_math_Integral$ = new $c_s_math_Integral$()
  };
  return $n_s_math_Integral$
}
/** @constructor */
function $c_s_math_Numeric$() {
  /*<skip>*/
}
$c_s_math_Numeric$.prototype = new $h_O();
$c_s_math_Numeric$.prototype.constructor = $c_s_math_Numeric$;
/** @constructor */
function $h_s_math_Numeric$() {
  /*<skip>*/
}
$h_s_math_Numeric$.prototype = $c_s_math_Numeric$.prototype;
var $d_s_math_Numeric$ = new $TypeData().initClass({
  s_math_Numeric$: 0
}, false, "scala.math.Numeric$", {
  s_math_Numeric$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Numeric$.prototype.$classData = $d_s_math_Numeric$;
var $n_s_math_Numeric$;
function $m_s_math_Numeric$() {
  if ((!$n_s_math_Numeric$)) {
    $n_s_math_Numeric$ = new $c_s_math_Numeric$()
  };
  return $n_s_math_Numeric$
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
var $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
/** @constructor */
function $c_sjs_js_Any$() {
  /*<skip>*/
}
$c_sjs_js_Any$.prototype = new $h_O();
$c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
  /*<skip>*/
}
$h_sjs_js_Any$.prototype = $c_sjs_js_Any$.prototype;
$c_sjs_js_Any$.prototype.fromFunction1__F1__sjs_js_Function1 = (function(f) {
  return ((f$45) => ((x1$2) => f$45.apply__O__O(x1$2)))(f)
});
var $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_s_util_Left$() {
  /*<skip>*/
}
$c_s_util_Left$.prototype = new $h_O();
$c_s_util_Left$.prototype.constructor = $c_s_util_Left$;
/** @constructor */
function $h_s_util_Left$() {
  /*<skip>*/
}
$h_s_util_Left$.prototype = $c_s_util_Left$.prototype;
$c_s_util_Left$.prototype.toString__T = (function() {
  return "Left"
});
var $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
var $n_s_util_Left$;
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
/** @constructor */
function $c_s_util_Right$() {
  /*<skip>*/
}
$c_s_util_Right$.prototype = new $h_O();
$c_s_util_Right$.prototype.constructor = $c_s_util_Right$;
/** @constructor */
function $h_s_util_Right$() {
  /*<skip>*/
}
$h_s_util_Right$.prototype = $c_s_util_Right$.prototype;
$c_s_util_Right$.prototype.toString__T = (function() {
  return "Right"
});
var $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
var $n_s_util_Right$;
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.s_util_control_NoStackTrace$__f__noSuppression = false;
  this.s_util_control_NoStackTrace$__f__noSuppression = false
}
$c_s_util_control_NoStackTrace$.prototype = new $h_O();
$c_s_util_control_NoStackTrace$.prototype.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
  /*<skip>*/
}
$h_s_util_control_NoStackTrace$.prototype = $c_s_util_control_NoStackTrace$.prototype;
var $d_s_util_control_NoStackTrace$ = new $TypeData().initClass({
  s_util_control_NoStackTrace$: 0
}, false, "scala.util.control.NoStackTrace$", {
  s_util_control_NoStackTrace$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_control_NoStackTrace$.prototype.$classData = $d_s_util_control_NoStackTrace$;
var $n_s_util_control_NoStackTrace$;
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$()
  };
  return $n_s_util_control_NoStackTrace$
}
/** @constructor */
function $c_Ljava_io_OutputStream() {
  /*<skip>*/
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
  /*<skip>*/
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2
    } else {
      var cause = null
    };
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_jl_AssertionError = new $TypeData().initClass({
  jl_AssertionError: 0
}, false, "java.lang.AssertionError", {
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_AssertionError.prototype.$classData = $d_jl_AssertionError;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  var b = $uZ($thiz);
  return ("" + b)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  var value = $uC($thiz);
  return value
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var $$x1 = $uC($thiz);
    var this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  var c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
function $ct_jl_StringBuilder__I__($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.append__jl_CharSequence__I__I__jl_StringBuilder = (function(s, start, end) {
  var this$1 = ((s === null) ? "null" : s);
  var s$1 = $dp_substring__I__I__T(this$1, start, end);
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s$1);
  return this
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return $uI(this$1.length)
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return (65535 & $uI(this$1.charCodeAt(index)))
});
$c_jl_StringBuilder.prototype.substring__I__I__T = (function(start, end) {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return $as_T(this$1.substring(start, end))
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
/** @constructor */
function $c_s_Array$() {
  /*<skip>*/
}
$c_s_Array$.prototype = new $h_s_FallbackArrayBuilding();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
  /*<skip>*/
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
    src.copyTo(srcPos, dest, destPos, length)
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
  }
});
var $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  s_FallbackArrayBuilding: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
/** @constructor */
function $c_s_Predef$$eq$colon$eq() {
  /*<skip>*/
}
$c_s_Predef$$eq$colon$eq.prototype = new $h_O();
$c_s_Predef$$eq$colon$eq.prototype.constructor = $c_s_Predef$$eq$colon$eq;
/** @constructor */
function $h_s_Predef$$eq$colon$eq() {
  /*<skip>*/
}
$h_s_Predef$$eq$colon$eq.prototype = $c_s_Predef$$eq$colon$eq.prototype;
$c_s_Predef$$eq$colon$eq.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_s_Predef$$less$colon$less() {
  /*<skip>*/
}
$c_s_Predef$$less$colon$less.prototype = new $h_O();
$c_s_Predef$$less$colon$less.prototype.constructor = $c_s_Predef$$less$colon$less;
/** @constructor */
function $h_s_Predef$$less$colon$less() {
  /*<skip>*/
}
$h_s_Predef$$less$colon$less.prototype = $c_s_Predef$$less$colon$less.prototype;
$c_s_Predef$$less$colon$less.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.foreach__F1__V = (function(f) {
  $s_sc_Iterator$class__foreach__sc_Iterator__F1__V(this, f)
});
$c_sc_AbstractIterator.prototype.toStream__sci_Stream = (function() {
  return $s_sc_Iterator$class__toStream__sc_Iterator__sci_Stream(this)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return $s_sc_Iterator$class__toString__sc_Iterator__T(this)
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $s_sc_TraversableOnce$class__addString__sc_TraversableOnce__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
/** @constructor */
function $c_scg_SetFactory() {
  /*<skip>*/
}
$c_scg_SetFactory.prototype = new $h_scg_GenSetFactory();
$c_scg_SetFactory.prototype.constructor = $c_scg_SetFactory;
/** @constructor */
function $h_scg_SetFactory() {
  /*<skip>*/
}
$h_scg_SetFactory.prototype = $c_scg_SetFactory.prototype;
function $ct_sci_ListSet$ListSetBuilder__sci_ListSet__($thiz, initial) {
  var this$1 = new $c_scm_ListBuffer().$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer(initial);
  $thiz.sci_ListSet$ListSetBuilder__f_elems = $as_scm_ListBuffer($s_sc_SeqLike$class__reverse__sc_SeqLike__O(this$1));
  var this$2 = $ct_scm_HashSet__(new $c_scm_HashSet());
  $thiz.sci_ListSet$ListSetBuilder__f_seen = $as_scm_HashSet($s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this$2, initial));
  return $thiz
}
function $ct_sci_ListSet$ListSetBuilder__($thiz) {
  $ct_sci_ListSet$ListSetBuilder__sci_ListSet__($thiz, $m_sci_ListSet$EmptyListSet$());
  return $thiz
}
/** @constructor */
function $c_sci_ListSet$ListSetBuilder() {
  this.sci_ListSet$ListSetBuilder__f_elems = null;
  this.sci_ListSet$ListSetBuilder__f_seen = null
}
$c_sci_ListSet$ListSetBuilder.prototype = new $h_O();
$c_sci_ListSet$ListSetBuilder.prototype.constructor = $c_sci_ListSet$ListSetBuilder;
/** @constructor */
function $h_sci_ListSet$ListSetBuilder() {
  /*<skip>*/
}
$h_sci_ListSet$ListSetBuilder.prototype = $c_sci_ListSet$ListSetBuilder.prototype;
$c_sci_ListSet$ListSetBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_ListSet$ListSetBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_ListSet$ListSetBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_sci_ListSet$ListSetBuilder.prototype.$plus$eq__O__sci_ListSet$ListSetBuilder = (function(x) {
  var this$1 = this.sci_ListSet$ListSetBuilder__f_seen;
  if ((!$s_scm_FlatHashTable$class__containsElem__scm_FlatHashTable__O__Z(this$1, x))) {
    this.sci_ListSet$ListSetBuilder__f_elems.$plus$eq__O__scm_ListBuffer(x);
    this.sci_ListSet$ListSetBuilder__f_seen.$plus$eq__O__scm_HashSet(x)
  };
  return this
});
$c_sci_ListSet$ListSetBuilder.prototype.result__sci_ListSet = (function() {
  var this$2 = this.sci_ListSet$ListSetBuilder__f_elems;
  var z = $m_sci_ListSet$EmptyListSet$();
  var this$3 = this$2.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  var acc = z;
  var these = this$3;
  while ((!these.isEmpty__Z())) {
    var arg1 = acc;
    var arg2 = these.head__O();
    var x$1 = $as_sci_ListSet(arg1);
    acc = new $c_sci_ListSet$Node(x$1, arg2);
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return $as_sci_ListSet(acc)
});
$c_sci_ListSet$ListSetBuilder.prototype.result__O = (function() {
  return this.result__sci_ListSet()
});
$c_sci_ListSet$ListSetBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__sci_ListSet$ListSetBuilder(elem)
});
$c_sci_ListSet$ListSetBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__sci_ListSet$ListSetBuilder(elem)
});
var $d_sci_ListSet$ListSetBuilder = new $TypeData().initClass({
  sci_ListSet$ListSetBuilder: 0
}, false, "scala.collection.immutable.ListSet$ListSetBuilder", {
  sci_ListSet$ListSetBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_ListSet$ListSetBuilder.prototype.$classData = $d_sci_ListSet$ListSetBuilder;
/** @constructor */
function $c_sci_Map$() {
  /*<skip>*/
}
$c_sci_Map$.prototype = new $h_scg_ImmutableMapFactory();
$c_sci_Map$.prototype.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
  /*<skip>*/
}
$h_sci_Map$.prototype = $c_sci_Map$.prototype;
var $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
/** @constructor */
function $c_scm_DefaultEntry(key, value) {
  this.scm_DefaultEntry__f_key = null;
  this.scm_DefaultEntry__f_value = null;
  this.scm_DefaultEntry__f_next = null;
  this.scm_DefaultEntry__f_key = key;
  this.scm_DefaultEntry__f_value = value
}
$c_scm_DefaultEntry.prototype = new $h_O();
$c_scm_DefaultEntry.prototype.constructor = $c_scm_DefaultEntry;
/** @constructor */
function $h_scm_DefaultEntry() {
  /*<skip>*/
}
$h_scm_DefaultEntry.prototype = $c_scm_DefaultEntry.prototype;
$c_scm_DefaultEntry.prototype.toString__T = (function() {
  return this.chainString__T()
});
$c_scm_DefaultEntry.prototype.chainString__T = (function() {
  var $$x3 = this.scm_DefaultEntry__f_key;
  var $$x2 = this.scm_DefaultEntry__f_value;
  if ((this.scm_DefaultEntry__f_next !== null)) {
    var this$1 = $as_scm_DefaultEntry(this.scm_DefaultEntry__f_next);
    var $$x1 = (" -> " + this$1.chainString__T())
  } else {
    var $$x1 = ""
  };
  return ((((("(kv: " + $$x3) + ", ") + $$x2) + ")") + $$x1)
});
function $as_scm_DefaultEntry(obj) {
  return (((obj instanceof $c_scm_DefaultEntry) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.DefaultEntry"))
}
function $isArrayOf_scm_DefaultEntry(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_DefaultEntry)))
}
function $asArrayOf_scm_DefaultEntry(obj, depth) {
  return (($isArrayOf_scm_DefaultEntry(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.DefaultEntry;", depth))
}
var $d_scm_DefaultEntry = new $TypeData().initClass({
  scm_DefaultEntry: 0
}, false, "scala.collection.mutable.DefaultEntry", {
  scm_DefaultEntry: 1,
  O: 1,
  scm_HashEntry: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_DefaultEntry.prototype.$classData = $d_scm_DefaultEntry;
/** @constructor */
function $c_scm_GrowingBuilder(empty) {
  this.scm_GrowingBuilder__f_empty = null;
  this.scm_GrowingBuilder__f_elems = null;
  this.scm_GrowingBuilder__f_empty = empty;
  this.scm_GrowingBuilder__f_elems = empty
}
$c_scm_GrowingBuilder.prototype = new $h_O();
$c_scm_GrowingBuilder.prototype.constructor = $c_scm_GrowingBuilder;
/** @constructor */
function $h_scm_GrowingBuilder() {
  /*<skip>*/
}
$h_scm_GrowingBuilder.prototype = $c_scm_GrowingBuilder.prototype;
$c_scm_GrowingBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_GrowingBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_GrowingBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scm_GrowingBuilder = (function(x) {
  this.scm_GrowingBuilder__f_elems.$plus$eq__O__scg_Growable(x);
  return this
});
$c_scm_GrowingBuilder.prototype.result__O = (function() {
  return this.scm_GrowingBuilder__f_elems
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_GrowingBuilder(elem)
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_GrowingBuilder(elem)
});
var $d_scm_GrowingBuilder = new $TypeData().initClass({
  scm_GrowingBuilder: 0
}, false, "scala.collection.mutable.GrowingBuilder", {
  scm_GrowingBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_GrowingBuilder.prototype.$classData = $d_scm_GrowingBuilder;
function $ct_scm_LazyBuilder__($thiz) {
  $thiz.scm_LazyBuilder__f_parts = new $c_scm_ListBuffer();
  return $thiz
}
/** @constructor */
function $c_scm_LazyBuilder() {
  this.scm_LazyBuilder__f_parts = null
}
$c_scm_LazyBuilder.prototype = new $h_O();
$c_scm_LazyBuilder.prototype.constructor = $c_scm_LazyBuilder;
/** @constructor */
function $h_scm_LazyBuilder() {
  /*<skip>*/
}
$h_scm_LazyBuilder.prototype = $c_scm_LazyBuilder.prototype;
$c_scm_LazyBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_LazyBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scm_LazyBuilder = (function(x) {
  var $$x1 = this.scm_LazyBuilder__f_parts;
  $m_sci_List$();
  var array = [x];
  var xs = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var this$4 = $m_sci_List$();
  var cbf = this$4.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $$x1.$plus$eq__O__scm_ListBuffer($as_sci_List($s_sc_TraversableLike$class__to__sc_TraversableLike__scg_CanBuildFrom__O(xs, cbf)));
  return this
});
$c_scm_LazyBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scm_LazyBuilder = (function(xs) {
  this.scm_LazyBuilder__f_parts.$plus$eq__O__scm_ListBuffer(xs);
  return this
});
$c_scm_LazyBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_LazyBuilder(xs)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_LazyBuilder(elem)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_LazyBuilder(elem)
});
/** @constructor */
function $c_scm_SetBuilder(empty) {
  this.scm_SetBuilder__f_empty = null;
  this.scm_SetBuilder__f_elems = null;
  this.scm_SetBuilder__f_empty = empty;
  this.scm_SetBuilder__f_elems = empty
}
$c_scm_SetBuilder.prototype = new $h_O();
$c_scm_SetBuilder.prototype.constructor = $c_scm_SetBuilder;
/** @constructor */
function $h_scm_SetBuilder() {
  /*<skip>*/
}
$h_scm_SetBuilder.prototype = $c_scm_SetBuilder.prototype;
$c_scm_SetBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_SetBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_SetBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scm_SetBuilder = (function(x) {
  this.scm_SetBuilder__f_elems = this.scm_SetBuilder__f_elems.$plus__O__sc_Set(x);
  return this
});
$c_scm_SetBuilder.prototype.result__O = (function() {
  return this.scm_SetBuilder__f_elems
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_SetBuilder(elem)
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_SetBuilder(elem)
});
var $d_scm_SetBuilder = new $TypeData().initClass({
  scm_SetBuilder: 0
}, false, "scala.collection.mutable.SetBuilder", {
  scm_SetBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_SetBuilder.prototype.$classData = $d_scm_SetBuilder;
/** @constructor */
function $c_s_math_Equiv$() {
  /*<skip>*/
}
$c_s_math_Equiv$.prototype = new $h_O();
$c_s_math_Equiv$.prototype.constructor = $c_s_math_Equiv$;
/** @constructor */
function $h_s_math_Equiv$() {
  /*<skip>*/
}
$h_s_math_Equiv$.prototype = $c_s_math_Equiv$.prototype;
var $d_s_math_Equiv$ = new $TypeData().initClass({
  s_math_Equiv$: 0
}, false, "scala.math.Equiv$", {
  s_math_Equiv$: 1,
  O: 1,
  s_math_LowPriorityEquiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Equiv$.prototype.$classData = $d_s_math_Equiv$;
var $n_s_math_Equiv$;
function $m_s_math_Equiv$() {
  if ((!$n_s_math_Equiv$)) {
    $n_s_math_Equiv$ = new $c_s_math_Equiv$()
  };
  return $n_s_math_Equiv$
}
/** @constructor */
function $c_s_math_Ordering$() {
  /*<skip>*/
}
$c_s_math_Ordering$.prototype = new $h_O();
$c_s_math_Ordering$.prototype.constructor = $c_s_math_Ordering$;
/** @constructor */
function $h_s_math_Ordering$() {
  /*<skip>*/
}
$h_s_math_Ordering$.prototype = $c_s_math_Ordering$.prototype;
var $d_s_math_Ordering$ = new $TypeData().initClass({
  s_math_Ordering$: 0
}, false, "scala.math.Ordering$", {
  s_math_Ordering$: 1,
  O: 1,
  s_math_LowPriorityOrderingImplicits: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$.prototype.$classData = $d_s_math_Ordering$;
var $n_s_math_Ordering$;
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$()
  };
  return $n_s_math_Ordering$
}
/** @constructor */
function $c_s_reflect_NoManifest$() {
  /*<skip>*/
}
$c_s_reflect_NoManifest$.prototype = new $h_O();
$c_s_reflect_NoManifest$.prototype.constructor = $c_s_reflect_NoManifest$;
/** @constructor */
function $h_s_reflect_NoManifest$() {
  /*<skip>*/
}
$h_s_reflect_NoManifest$.prototype = $c_s_reflect_NoManifest$.prototype;
$c_s_reflect_NoManifest$.prototype.toString__T = (function() {
  return "<?>"
});
var $d_s_reflect_NoManifest$ = new $TypeData().initClass({
  s_reflect_NoManifest$: 0
}, false, "scala.reflect.NoManifest$", {
  s_reflect_NoManifest$: 1,
  O: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_NoManifest$.prototype.$classData = $d_s_reflect_NoManifest$;
var $n_s_reflect_NoManifest$;
function $m_s_reflect_NoManifest$() {
  if ((!$n_s_reflect_NoManifest$)) {
    $n_s_reflect_NoManifest$ = new $c_s_reflect_NoManifest$()
  };
  return $n_s_reflect_NoManifest$
}
/** @constructor */
function $c_sr_AbstractFunction0$mcV$sp() {
  /*<skip>*/
}
$c_sr_AbstractFunction0$mcV$sp.prototype = new $h_sr_AbstractFunction0();
$c_sr_AbstractFunction0$mcV$sp.prototype.constructor = $c_sr_AbstractFunction0$mcV$sp;
/** @constructor */
function $h_sr_AbstractFunction0$mcV$sp() {
  /*<skip>*/
}
$h_sr_AbstractFunction0$mcV$sp.prototype = $c_sr_AbstractFunction0$mcV$sp.prototype;
/** @constructor */
function $c_LDearHenry_engine_Point(x, y) {
  this.LDearHenry_engine_Point__f_x = 0.0;
  this.LDearHenry_engine_Point__f_y = 0.0;
  this.LDearHenry_engine_Point__f_x = x;
  this.LDearHenry_engine_Point__f_y = y
}
$c_LDearHenry_engine_Point.prototype = new $h_O();
$c_LDearHenry_engine_Point.prototype.constructor = $c_LDearHenry_engine_Point;
/** @constructor */
function $h_LDearHenry_engine_Point() {
  /*<skip>*/
}
$h_LDearHenry_engine_Point.prototype = $c_LDearHenry_engine_Point.prototype;
$c_LDearHenry_engine_Point.prototype.fillCircle__Lorg_scalajs_dom_CanvasRenderingContext2D__D__V = (function(context, radius) {
  context.beginPath();
  context.arc(this.LDearHenry_engine_Point__f_x, this.LDearHenry_engine_Point__f_y, radius, 0.0, 6.283185307179586, false);
  context.fill()
});
$c_LDearHenry_engine_Point.prototype.move__LDearHenry_engine_Point__LDearHenry_engine_Point = (function(distance) {
  return new $c_LDearHenry_engine_Point((this.LDearHenry_engine_Point__f_x + distance.LDearHenry_engine_Point__f_x), (this.LDearHenry_engine_Point__f_y + distance.LDearHenry_engine_Point__f_y))
});
$c_LDearHenry_engine_Point.prototype.toSquare__D__LDearHenry_engine_Rectangle = (function(r) {
  return new $c_LDearHenry_engine_Rectangle((this.LDearHenry_engine_Point__f_x - r), (this.LDearHenry_engine_Point__f_y - r), (2.0 * r), (2.0 * r))
});
$c_LDearHenry_engine_Point.prototype.fillSquare__Lorg_scalajs_dom_CanvasRenderingContext2D__D__V = (function(context, r) {
  context.fillRect((this.LDearHenry_engine_Point__f_x - r), (this.LDearHenry_engine_Point__f_y - r), (2.0 * r), (2.0 * r))
});
$c_LDearHenry_engine_Point.prototype.productPrefix__T = (function() {
  return "Point"
});
$c_LDearHenry_engine_Point.prototype.productArity__I = (function() {
  return 2
});
$c_LDearHenry_engine_Point.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.LDearHenry_engine_Point__f_x;
      break
    }
    case 1: {
      return this.LDearHenry_engine_Point__f_y;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_LDearHenry_engine_Point.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_LDearHenry_engine_Point.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var dv = this.LDearHenry_engine_Point__f_x;
  var data = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var dv$1 = this.LDearHenry_engine_Point__f_y;
  var data$1 = $m_sr_Statics$().doubleHash__D__I(dv$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$2, 2)
});
$c_LDearHenry_engine_Point.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_LDearHenry_engine_Point.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_LDearHenry_engine_Point)) {
    var Point$1 = $as_LDearHenry_engine_Point(x$1);
    return ((this.LDearHenry_engine_Point__f_x === Point$1.LDearHenry_engine_Point__f_x) && (this.LDearHenry_engine_Point__f_y === Point$1.LDearHenry_engine_Point__f_y))
  } else {
    return false
  }
});
function $as_LDearHenry_engine_Point(obj) {
  return (((obj instanceof $c_LDearHenry_engine_Point) || (obj === null)) ? obj : $throwClassCastException(obj, "DearHenry.engine.Point"))
}
function $isArrayOf_LDearHenry_engine_Point(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.LDearHenry_engine_Point)))
}
function $asArrayOf_LDearHenry_engine_Point(obj, depth) {
  return (($isArrayOf_LDearHenry_engine_Point(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "LDearHenry.engine.Point;", depth))
}
var $d_LDearHenry_engine_Point = new $TypeData().initClass({
  LDearHenry_engine_Point: 0
}, false, "DearHenry.engine.Point", {
  LDearHenry_engine_Point: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_LDearHenry_engine_Point.prototype.$classData = $d_LDearHenry_engine_Point;
/** @constructor */
function $c_LDearHenry_engine_Rectangle(x, y, w, h) {
  this.LDearHenry_engine_Rectangle__f_x = 0.0;
  this.LDearHenry_engine_Rectangle__f_y = 0.0;
  this.LDearHenry_engine_Rectangle__f_w = 0.0;
  this.LDearHenry_engine_Rectangle__f_h = 0.0;
  this.LDearHenry_engine_Rectangle__f_x = x;
  this.LDearHenry_engine_Rectangle__f_y = y;
  this.LDearHenry_engine_Rectangle__f_w = w;
  this.LDearHenry_engine_Rectangle__f_h = h
}
$c_LDearHenry_engine_Rectangle.prototype = new $h_O();
$c_LDearHenry_engine_Rectangle.prototype.constructor = $c_LDearHenry_engine_Rectangle;
/** @constructor */
function $h_LDearHenry_engine_Rectangle() {
  /*<skip>*/
}
$h_LDearHenry_engine_Rectangle.prototype = $c_LDearHenry_engine_Rectangle.prototype;
$c_LDearHenry_engine_Rectangle.prototype.center__LDearHenry_engine_Point = (function() {
  return new $c_LDearHenry_engine_Point((this.LDearHenry_engine_Rectangle__f_x + (this.LDearHenry_engine_Rectangle__f_w / 2.0)), (this.LDearHenry_engine_Rectangle__f_y + (this.LDearHenry_engine_Rectangle__f_h / 2.0)))
});
$c_LDearHenry_engine_Rectangle.prototype.fill__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(context) {
  context.fillRect(this.LDearHenry_engine_Rectangle__f_x, this.LDearHenry_engine_Rectangle__f_y, this.LDearHenry_engine_Rectangle__f_w, this.LDearHenry_engine_Rectangle__f_h)
});
$c_LDearHenry_engine_Rectangle.prototype.isFat__Z = (function() {
  return (this.LDearHenry_engine_Rectangle__f_w >= this.LDearHenry_engine_Rectangle__f_h)
});
$c_LDearHenry_engine_Rectangle.prototype.productPrefix__T = (function() {
  return "Rectangle"
});
$c_LDearHenry_engine_Rectangle.prototype.productArity__I = (function() {
  return 4
});
$c_LDearHenry_engine_Rectangle.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.LDearHenry_engine_Rectangle__f_x;
      break
    }
    case 1: {
      return this.LDearHenry_engine_Rectangle__f_y;
      break
    }
    case 2: {
      return this.LDearHenry_engine_Rectangle__f_w;
      break
    }
    case 3: {
      return this.LDearHenry_engine_Rectangle__f_h;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_LDearHenry_engine_Rectangle.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_LDearHenry_engine_Rectangle.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var dv = this.LDearHenry_engine_Rectangle__f_x;
  var data = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var dv$1 = this.LDearHenry_engine_Rectangle__f_y;
  var data$1 = $m_sr_Statics$().doubleHash__D__I(dv$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var dv$2 = this.LDearHenry_engine_Rectangle__f_w;
  var data$2 = $m_sr_Statics$().doubleHash__D__I(dv$2);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var dv$3 = this.LDearHenry_engine_Rectangle__f_h;
  var data$3 = $m_sr_Statics$().doubleHash__D__I(dv$3);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 4)
});
$c_LDearHenry_engine_Rectangle.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_LDearHenry_engine_Rectangle.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_LDearHenry_engine_Rectangle)) {
    var Rectangle$1 = $as_LDearHenry_engine_Rectangle(x$1);
    return ((((this.LDearHenry_engine_Rectangle__f_x === Rectangle$1.LDearHenry_engine_Rectangle__f_x) && (this.LDearHenry_engine_Rectangle__f_y === Rectangle$1.LDearHenry_engine_Rectangle__f_y)) && (this.LDearHenry_engine_Rectangle__f_w === Rectangle$1.LDearHenry_engine_Rectangle__f_w)) && (this.LDearHenry_engine_Rectangle__f_h === Rectangle$1.LDearHenry_engine_Rectangle__f_h))
  } else {
    return false
  }
});
function $as_LDearHenry_engine_Rectangle(obj) {
  return (((obj instanceof $c_LDearHenry_engine_Rectangle) || (obj === null)) ? obj : $throwClassCastException(obj, "DearHenry.engine.Rectangle"))
}
function $isArrayOf_LDearHenry_engine_Rectangle(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.LDearHenry_engine_Rectangle)))
}
function $asArrayOf_LDearHenry_engine_Rectangle(obj, depth) {
  return (($isArrayOf_LDearHenry_engine_Rectangle(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "LDearHenry.engine.Rectangle;", depth))
}
var $d_LDearHenry_engine_Rectangle = new $TypeData().initClass({
  LDearHenry_engine_Rectangle: 0
}, false, "DearHenry.engine.Rectangle", {
  LDearHenry_engine_Rectangle: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_LDearHenry_engine_Rectangle.prototype.$classData = $d_LDearHenry_engine_Rectangle;
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  $thiz.Ljava_io_FilterOutputStream__f_out = out;
  return $thiz
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
  this.Ljava_io_FilterOutputStream__f_out = null
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
  /*<skip>*/
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $uB($thiz)
}
function $f_jl_Byte__toString__T($thiz) {
  var b = $uB($thiz);
  return ("" + b)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"))
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth))
}
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
  /*<skip>*/
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
  /*<skip>*/
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream$DummyOutputStream;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $uS($thiz)
}
function $f_jl_Short__toString__T($thiz) {
  var s = $uS($thiz);
  return ("" + s)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_ju_NoSuchElementException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : cause.toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectClassName(this$1))
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    var e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Option() {
  /*<skip>*/
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
  /*<skip>*/
}
$h_s_Option.prototype = $c_s_Option.prototype;
/** @constructor */
function $c_s_Predef$$anon$1() {
  /*<skip>*/
}
$c_s_Predef$$anon$1.prototype = new $h_s_Predef$$less$colon$less();
$c_s_Predef$$anon$1.prototype.constructor = $c_s_Predef$$anon$1;
/** @constructor */
function $h_s_Predef$$anon$1() {
  /*<skip>*/
}
$h_s_Predef$$anon$1.prototype = $c_s_Predef$$anon$1.prototype;
$c_s_Predef$$anon$1.prototype.apply__O__O = (function(x) {
  return x
});
var $d_s_Predef$$anon$1 = new $TypeData().initClass({
  s_Predef$$anon$1: 0
}, false, "scala.Predef$$anon$1", {
  s_Predef$$anon$1: 1,
  s_Predef$$less$colon$less: 1,
  O: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Predef$$anon$1.prototype.$classData = $d_s_Predef$$anon$1;
/** @constructor */
function $c_s_Predef$$anon$2() {
  /*<skip>*/
}
$c_s_Predef$$anon$2.prototype = new $h_s_Predef$$eq$colon$eq();
$c_s_Predef$$anon$2.prototype.constructor = $c_s_Predef$$anon$2;
/** @constructor */
function $h_s_Predef$$anon$2() {
  /*<skip>*/
}
$h_s_Predef$$anon$2.prototype = $c_s_Predef$$anon$2.prototype;
$c_s_Predef$$anon$2.prototype.apply__O__O = (function(x) {
  return x
});
var $d_s_Predef$$anon$2 = new $TypeData().initClass({
  s_Predef$$anon$2: 0
}, false, "scala.Predef$$anon$2", {
  s_Predef$$anon$2: 1,
  s_Predef$$eq$colon$eq: 1,
  O: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Predef$$anon$2.prototype.$classData = $d_s_Predef$$anon$2;
/** @constructor */
function $c_s_StringContext(parts) {
  this.s_StringContext__f_parts = null;
  this.s_StringContext__f_parts = parts
}
$c_s_StringContext.prototype = new $h_O();
$c_s_StringContext.prototype.constructor = $c_s_StringContext;
/** @constructor */
function $h_s_StringContext() {
  /*<skip>*/
}
$h_s_StringContext.prototype = $c_s_StringContext.prototype;
$c_s_StringContext.prototype.checkLengths__sc_Seq__V = (function(args) {
  if ((this.s_StringContext__f_parts.length__I() !== ((1 + args.length__I()) | 0))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("wrong number of arguments (" + args.length__I()) + ") for interpolated string with ") + this.s_StringContext__f_parts.length__I()) + " parts"))
  }
});
$c_s_StringContext.prototype.s__sc_Seq__T = (function(args) {
  var f = ((this$1) => ((str$2) => {
    var str = $as_T(str$2);
    var this$2 = $m_s_StringContext$();
    return $p_s_StringContext$__treatEscapes0__T__Z__T(this$2, str, false)
  }))(this);
  this.checkLengths__sc_Seq__V(args);
  var pi = this.s_StringContext__f_parts.iterator__sc_Iterator();
  var ai = args.iterator__sc_Iterator();
  var arg1 = pi.next__O();
  var bldr = $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), $as_T(f(arg1)));
  while (ai.hasNext__Z()) {
    var obj = ai.next__O();
    bldr.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + bldr.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    var arg1$1 = pi.next__O();
    var str$1 = $as_T(f(arg1$1));
    bldr.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + bldr.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1)
  };
  return bldr.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_s_StringContext.prototype.productPrefix__T = (function() {
  return "StringContext"
});
$c_s_StringContext.prototype.productArity__I = (function() {
  return 1
});
$c_s_StringContext.prototype.productElement__I__O = (function(x$1) {
  if ((x$1 === 0)) {
    return this.s_StringContext__f_parts
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  }
});
$c_s_StringContext.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_StringContext.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_s_StringContext.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_StringContext.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_StringContext)) {
    var StringContext$1 = $as_s_StringContext(x$1);
    var x = this.s_StringContext__f_parts;
    var x$2 = StringContext$1.s_StringContext__f_parts;
    return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
  } else {
    return false
  }
});
function $as_s_StringContext(obj) {
  return (((obj instanceof $c_s_StringContext) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.StringContext"))
}
function $isArrayOf_s_StringContext(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_StringContext)))
}
function $asArrayOf_s_StringContext(obj, depth) {
  return (($isArrayOf_s_StringContext(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.StringContext;", depth))
}
var $d_s_StringContext = new $TypeData().initClass({
  s_StringContext: 0
}, false, "scala.StringContext", {
  s_StringContext: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_StringContext.prototype.$classData = $d_s_StringContext;
/** @constructor */
function $c_sc_Iterable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_Iterable$.prototype = new $h_scg_GenTraversableFactory();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
$c_sc_Iterable$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Iterable$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
/** @constructor */
function $c_sc_Iterator$$anon$11(outer, f$3) {
  this.sc_Iterator$$anon$11__f_$outer = null;
  this.sc_Iterator$$anon$11__f_f$3 = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sc_Iterator$$anon$11__f_$outer = outer
  };
  this.sc_Iterator$$anon$11__f_f$3 = f$3
}
$c_sc_Iterator$$anon$11.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$11.prototype.constructor = $c_sc_Iterator$$anon$11;
/** @constructor */
function $h_sc_Iterator$$anon$11() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$11.prototype = $c_sc_Iterator$$anon$11.prototype;
$c_sc_Iterator$$anon$11.prototype.hasNext__Z = (function() {
  return this.sc_Iterator$$anon$11__f_$outer.hasNext__Z()
});
$c_sc_Iterator$$anon$11.prototype.next__O = (function() {
  return this.sc_Iterator$$anon$11__f_f$3.apply__O__O(this.sc_Iterator$$anon$11__f_$outer.next__O())
});
var $d_sc_Iterator$$anon$11 = new $TypeData().initClass({
  sc_Iterator$$anon$11: 0
}, false, "scala.collection.Iterator$$anon$11", {
  sc_Iterator$$anon$11: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$11.prototype.$classData = $d_sc_Iterator$$anon$11;
/** @constructor */
function $c_sc_Iterator$$anon$2() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$2.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$2.prototype.constructor = $c_sc_Iterator$$anon$2;
/** @constructor */
function $h_sc_Iterator$$anon$2() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$2.prototype = $c_sc_Iterator$$anon$2.prototype;
$c_sc_Iterator$$anon$2.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$2.prototype.next__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
});
$c_sc_Iterator$$anon$2.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$2 = new $TypeData().initClass({
  sc_Iterator$$anon$2: 0
}, false, "scala.collection.Iterator$$anon$2", {
  sc_Iterator$$anon$2: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$2.prototype.$classData = $d_sc_Iterator$$anon$2;
/** @constructor */
function $c_sc_LinearSeqLike$$anon$1(outer) {
  this.sc_LinearSeqLike$$anon$1__f_these = null;
  this.sc_LinearSeqLike$$anon$1__f_these = outer
}
$c_sc_LinearSeqLike$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_LinearSeqLike$$anon$1.prototype.constructor = $c_sc_LinearSeqLike$$anon$1;
/** @constructor */
function $h_sc_LinearSeqLike$$anon$1() {
  /*<skip>*/
}
$h_sc_LinearSeqLike$$anon$1.prototype = $c_sc_LinearSeqLike$$anon$1.prototype;
$c_sc_LinearSeqLike$$anon$1.prototype.hasNext__Z = (function() {
  return (!this.sc_LinearSeqLike$$anon$1__f_these.isEmpty__Z())
});
$c_sc_LinearSeqLike$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var result = this.sc_LinearSeqLike$$anon$1__f_these.head__O();
    this.sc_LinearSeqLike$$anon$1__f_these = $as_sc_LinearSeqLike(this.sc_LinearSeqLike$$anon$1__f_these.tail__O());
    return result
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
var $d_sc_LinearSeqLike$$anon$1 = new $TypeData().initClass({
  sc_LinearSeqLike$$anon$1: 0
}, false, "scala.collection.LinearSeqLike$$anon$1", {
  sc_LinearSeqLike$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_LinearSeqLike$$anon$1.prototype.$classData = $d_sc_LinearSeqLike$$anon$1;
/** @constructor */
function $c_sc_Traversable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sc_Traversable$__f_breaks = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sc_Traversable$ = this;
  this.sc_Traversable$__f_breaks = new $c_s_util_control_Breaks()
}
$c_sc_Traversable$.prototype = new $h_scg_GenTraversableFactory();
$c_sc_Traversable$.prototype.constructor = $c_sc_Traversable$;
/** @constructor */
function $h_sc_Traversable$() {
  /*<skip>*/
}
$h_sc_Traversable$.prototype = $c_sc_Traversable$.prototype;
$c_sc_Traversable$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Traversable$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Traversable$ = new $TypeData().initClass({
  sc_Traversable$: 0
}, false, "scala.collection.Traversable$", {
  sc_Traversable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Traversable$.prototype.$classData = $d_sc_Traversable$;
var $n_sc_Traversable$;
function $m_sc_Traversable$() {
  if ((!$n_sc_Traversable$)) {
    $n_sc_Traversable$ = new $c_sc_Traversable$()
  };
  return $n_sc_Traversable$
}
/** @constructor */
function $c_scg_ImmutableSetFactory() {
  /*<skip>*/
}
$c_scg_ImmutableSetFactory.prototype = new $h_scg_SetFactory();
$c_scg_ImmutableSetFactory.prototype.constructor = $c_scg_ImmutableSetFactory;
/** @constructor */
function $h_scg_ImmutableSetFactory() {
  /*<skip>*/
}
$h_scg_ImmutableSetFactory.prototype = $c_scg_ImmutableSetFactory.prototype;
$c_scg_ImmutableSetFactory.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_SetBuilder(this.emptyInstance__sci_Set())
});
/** @constructor */
function $c_scg_MutableSetFactory() {
  /*<skip>*/
}
$c_scg_MutableSetFactory.prototype = new $h_scg_SetFactory();
$c_scg_MutableSetFactory.prototype.constructor = $c_scg_MutableSetFactory;
/** @constructor */
function $h_scg_MutableSetFactory() {
  /*<skip>*/
}
$h_scg_MutableSetFactory.prototype = $c_scg_MutableSetFactory.prototype;
$c_scg_MutableSetFactory.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder($as_scg_Growable(this.empty__sc_GenTraversable()))
});
/** @constructor */
function $c_sci_Iterable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Iterable$.prototype = new $h_scg_GenTraversableFactory();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
$c_sci_Iterable$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
/** @constructor */
function $c_sci_ListSet$$anon$1(outer) {
  this.sci_ListSet$$anon$1__f_that = null;
  this.sci_ListSet$$anon$1__f_that = outer
}
$c_sci_ListSet$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sci_ListSet$$anon$1.prototype.constructor = $c_sci_ListSet$$anon$1;
/** @constructor */
function $h_sci_ListSet$$anon$1() {
  /*<skip>*/
}
$h_sci_ListSet$$anon$1.prototype = $c_sci_ListSet$$anon$1.prototype;
$c_sci_ListSet$$anon$1.prototype.hasNext__Z = (function() {
  var this$1 = this.sci_ListSet$$anon$1__f_that;
  return (!this$1.isEmpty__Z())
});
$c_sci_ListSet$$anon$1.prototype.next__O = (function() {
  var this$1 = this.sci_ListSet$$anon$1__f_that;
  if ((!this$1.isEmpty__Z())) {
    var res = this.sci_ListSet$$anon$1__f_that.head__O();
    this.sci_ListSet$$anon$1__f_that = this.sci_ListSet$$anon$1__f_that.tail__sci_ListSet();
    return res
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
var $d_sci_ListSet$$anon$1 = new $TypeData().initClass({
  sci_ListSet$$anon$1: 0
}, false, "scala.collection.immutable.ListSet$$anon$1", {
  sci_ListSet$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_ListSet$$anon$1.prototype.$classData = $d_sci_ListSet$$anon$1;
/** @constructor */
function $c_sci_Stream$StreamBuilder() {
  this.scm_LazyBuilder__f_parts = null;
  $ct_scm_LazyBuilder__(this)
}
$c_sci_Stream$StreamBuilder.prototype = new $h_scm_LazyBuilder();
$c_sci_Stream$StreamBuilder.prototype.constructor = $c_sci_Stream$StreamBuilder;
/** @constructor */
function $h_sci_Stream$StreamBuilder() {
  /*<skip>*/
}
$h_sci_Stream$StreamBuilder.prototype = $c_sci_Stream$StreamBuilder.prototype;
$c_sci_Stream$StreamBuilder.prototype.result__sci_Stream = (function() {
  var this$1 = this.scm_LazyBuilder__f_parts;
  return $as_sci_Stream(this$1.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.toStream__sci_Stream().flatMap__F1__scg_CanBuildFrom__O(new $c_sjsr_AnonFunction1(((this$2) => ((x$5$2) => {
    var x$5 = $as_sc_TraversableOnce(x$5$2);
    return x$5.toStream__sci_Stream()
  }))(this)), ($m_sci_Stream$(), new $c_sci_Stream$StreamCanBuildFrom())))
});
$c_sci_Stream$StreamBuilder.prototype.result__O = (function() {
  return this.result__sci_Stream()
});
function $as_sci_Stream$StreamBuilder(obj) {
  return (((obj instanceof $c_sci_Stream$StreamBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream$StreamBuilder"))
}
function $isArrayOf_sci_Stream$StreamBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream$StreamBuilder)))
}
function $asArrayOf_sci_Stream$StreamBuilder(obj, depth) {
  return (($isArrayOf_sci_Stream$StreamBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream$StreamBuilder;", depth))
}
var $d_sci_Stream$StreamBuilder = new $TypeData().initClass({
  sci_Stream$StreamBuilder: 0
}, false, "scala.collection.immutable.Stream$StreamBuilder", {
  sci_Stream$StreamBuilder: 1,
  scm_LazyBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Stream$StreamBuilder.prototype.$classData = $d_sci_Stream$StreamBuilder;
/** @constructor */
function $c_sci_StreamIterator(self) {
  this.sci_StreamIterator__f_these = null;
  this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, self$1) => (() => self$1))(this, self)))
}
$c_sci_StreamIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_StreamIterator.prototype.constructor = $c_sci_StreamIterator;
/** @constructor */
function $h_sci_StreamIterator() {
  /*<skip>*/
}
$h_sci_StreamIterator.prototype = $c_sci_StreamIterator.prototype;
$c_sci_StreamIterator.prototype.hasNext__Z = (function() {
  var this$1 = this.sci_StreamIterator__f_these.v__sci_Stream();
  return (!this$1.isEmpty__Z())
});
$c_sci_StreamIterator.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  } else {
    var cur = this.sci_StreamIterator__f_these.v__sci_Stream();
    var result = cur.head__O();
    this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, cur$1) => (() => $as_sci_Stream(cur$1.tail__O())))(this, cur)));
    return result
  }
});
$c_sci_StreamIterator.prototype.toStream__sci_Stream = (function() {
  var result = this.sci_StreamIterator__f_these.v__sci_Stream();
  this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1) => (() => {
    $m_sci_Stream$();
    return $m_sci_Stream$Empty$()
  }))(this)));
  return result
});
var $d_sci_StreamIterator = new $TypeData().initClass({
  sci_StreamIterator: 0
}, false, "scala.collection.immutable.StreamIterator", {
  sci_StreamIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_StreamIterator.prototype.$classData = $d_sci_StreamIterator;
/** @constructor */
function $c_sci_Traversable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Traversable$.prototype = new $h_scg_GenTraversableFactory();
$c_sci_Traversable$.prototype.constructor = $c_sci_Traversable$;
/** @constructor */
function $h_sci_Traversable$() {
  /*<skip>*/
}
$h_sci_Traversable$.prototype = $c_sci_Traversable$.prototype;
$c_sci_Traversable$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Traversable$ = new $TypeData().initClass({
  sci_Traversable$: 0
}, false, "scala.collection.immutable.Traversable$", {
  sci_Traversable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Traversable$.prototype.$classData = $d_sci_Traversable$;
var $n_sci_Traversable$;
function $m_sci_Traversable$() {
  if ((!$n_sci_Traversable$)) {
    $n_sci_Traversable$ = new $c_sci_Traversable$()
  };
  return $n_sci_Traversable$
}
function $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, x) {
  if (false) {
    var x2 = $as_sci_HashMap$HashTrieMap(x);
    var $$x1 = x2.elems__Asci_HashMap()
  } else {
    if ((!(x instanceof $c_sci_HashSet$HashTrieSet))) {
      throw new $c_s_MatchError(x)
    };
    var x3 = $as_sci_HashSet$HashTrieSet(x);
    var $$x1 = x3.sci_HashSet$HashTrieSet__f_elems
  };
  return $asArrayOf_sci_Iterable($$x1, 1)
}
function $p_sci_TrieIterator__isTrie__O__Z($thiz, x) {
  return (false || (x instanceof $c_sci_HashSet$HashTrieSet))
}
function $p_sci_TrieIterator__isContainer__O__Z($thiz, x) {
  return (false || (x instanceof $c_sci_HashSet$HashSet1))
}
function $p_sci_TrieIterator__next0__Asci_Iterable__I__O($thiz, elems, i) {
  while (true) {
    if ((i === (((-1) + elems.u.length) | 0))) {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = (((-1) + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth) | 0);
      if (($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0)) {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.get($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack.get($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, null)
      } else {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0
      }
    } else {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = ((1 + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD) | 0)
    };
    var m = elems.get(i);
    if ($p_sci_TrieIterator__isContainer__O__Z($thiz, m)) {
      return $as_sci_HashSet$HashSet1(m).sci_HashSet$HashSet1__f_key
    } else if ($p_sci_TrieIterator__isTrie__O__Z($thiz, m)) {
      if (($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0)) {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD)
      };
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = ((1 + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth) | 0);
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, m);
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
      var temp$elems = $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, m);
      elems = temp$elems;
      i = 0
    } else {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = m.iterator__sc_Iterator();
      return $thiz.next__O()
    }
  }
}
function $ct_sci_TrieIterator__Asci_Iterable__($thiz, elems) {
  $thiz.sci_TrieIterator__f_elems = elems;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = $thiz.initArrayStack__AAsci_Iterable();
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = $thiz.initPosStack__AI();
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $thiz.sci_TrieIterator__f_elems;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  return $thiz
}
/** @constructor */
function $c_sci_TrieIterator() {
  this.sci_TrieIterator__f_elems = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null
}
$c_sci_TrieIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_TrieIterator.prototype.constructor = $c_sci_TrieIterator;
/** @constructor */
function $h_sci_TrieIterator() {
  /*<skip>*/
}
$h_sci_TrieIterator.prototype = $c_sci_TrieIterator.prototype;
$c_sci_TrieIterator.prototype.initArrayStack__AAsci_Iterable = (function() {
  return new ($d_sci_Iterable.getArrayOf().getArrayOf().constr)(6)
});
$c_sci_TrieIterator.prototype.initPosStack__AI = (function() {
  return new $ac_I(6)
});
$c_sci_TrieIterator.prototype.hasNext__Z = (function() {
  return ((this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter !== null) || (this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0))
});
$c_sci_TrieIterator.prototype.next__O = (function() {
  if ((this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter !== null)) {
    var el = this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter.next__O();
    if ((!this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter.hasNext__Z())) {
      this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null
    };
    return el
  } else {
    return $p_sci_TrieIterator__next0__Asci_Iterable__I__O(this, this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD, this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD)
  }
});
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_blockIndex = 0;
  this.sci_VectorBuilder__f_lo = 0;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_display0 = null;
  this.sci_VectorBuilder__f_display1 = null;
  this.sci_VectorBuilder__f_display2 = null;
  this.sci_VectorBuilder__f_display3 = null;
  this.sci_VectorBuilder__f_display4 = null;
  this.sci_VectorBuilder__f_display5 = null;
  this.sci_VectorBuilder__f_display0 = new $ac_O(32);
  this.sci_VectorBuilder__f_depth = 1;
  this.sci_VectorBuilder__f_blockIndex = 0;
  this.sci_VectorBuilder__f_lo = 0
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
  /*<skip>*/
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.depth__I = (function() {
  return this.sci_VectorBuilder__f_depth
});
$c_sci_VectorBuilder.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_VectorBuilder__f_depth = x$1
});
$c_sci_VectorBuilder.prototype.display0__AO = (function() {
  return this.sci_VectorBuilder__f_display0
});
$c_sci_VectorBuilder.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display0 = x$1
});
$c_sci_VectorBuilder.prototype.display1__AO = (function() {
  return this.sci_VectorBuilder__f_display1
});
$c_sci_VectorBuilder.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display1 = x$1
});
$c_sci_VectorBuilder.prototype.display2__AO = (function() {
  return this.sci_VectorBuilder__f_display2
});
$c_sci_VectorBuilder.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display2 = x$1
});
$c_sci_VectorBuilder.prototype.display3__AO = (function() {
  return this.sci_VectorBuilder__f_display3
});
$c_sci_VectorBuilder.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display3 = x$1
});
$c_sci_VectorBuilder.prototype.display4__AO = (function() {
  return this.sci_VectorBuilder__f_display4
});
$c_sci_VectorBuilder.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display4 = x$1
});
$c_sci_VectorBuilder.prototype.display5__AO = (function() {
  return this.sci_VectorBuilder__f_display5
});
$c_sci_VectorBuilder.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display5 = x$1
});
$c_sci_VectorBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_VectorBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_lo >= this.sci_VectorBuilder__f_display0.u.length)) {
    var newBlockIndex = ((32 + this.sci_VectorBuilder__f_blockIndex) | 0);
    var xor = (this.sci_VectorBuilder__f_blockIndex ^ newBlockIndex);
    $s_sci_VectorPointer$class__gotoNextBlockStartWritable__sci_VectorPointer__I__I__V(this, newBlockIndex, xor);
    this.sci_VectorBuilder__f_blockIndex = newBlockIndex;
    this.sci_VectorBuilder__f_lo = 0
  };
  this.sci_VectorBuilder__f_display0.set(this.sci_VectorBuilder__f_lo, elem);
  this.sci_VectorBuilder__f_lo = ((1 + this.sci_VectorBuilder__f_lo) | 0);
  return this
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  var size = ((this.sci_VectorBuilder__f_blockIndex + this.sci_VectorBuilder__f_lo) | 0);
  if ((size === 0)) {
    var this$1 = $m_sci_Vector$();
    return this$1.sci_Vector$__f_NIL
  };
  var s = new $c_sci_Vector(0, size, 0);
  var depth = this.sci_VectorBuilder__f_depth;
  $s_sci_VectorPointer$class__initFrom__sci_VectorPointer__sci_VectorPointer__I__V(s, this, depth);
  if ((this.sci_VectorBuilder__f_depth > 1)) {
    var xor = (((-1) + size) | 0);
    $s_sci_VectorPointer$class__gotoPos__sci_VectorPointer__I__I__V(s, 0, xor)
  };
  return s
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector()
});
$c_sci_VectorBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $as_sci_VectorBuilder($s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs))
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__sci_VectorBuilder(elem)
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__sci_VectorBuilder(elem)
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
var $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_self = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  this.scm_Builder$$anon$1__f_f$1 = f$1;
  this.scm_Builder$$anon$1__f_self = outer
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
  /*<skip>*/
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.hashCode__I = (function() {
  return this.scm_Builder$$anon$1__f_self.hashCode__I()
});
$c_scm_Builder$$anon$1.prototype.equals__O__Z = (function(that) {
  return $s_s_Proxy$class__equals__s_Proxy__O__Z(this, that)
});
$c_scm_Builder$$anon$1.prototype.toString__T = (function() {
  return $s_s_Proxy$class__toString__s_Proxy__T(this)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scm_Builder$$anon$1 = (function(x) {
  this.scm_Builder$$anon$1__f_self.$plus$eq__O__scm_Builder(x);
  return this
});
$c_scm_Builder$$anon$1.prototype.$plus$plus$eq__sc_TraversableOnce__scm_Builder$$anon$1 = (function(xs) {
  this.scm_Builder$$anon$1__f_self.$plus$plus$eq__sc_TraversableOnce__scg_Growable(xs);
  return this
});
$c_scm_Builder$$anon$1.prototype.sizeHint__I__V = (function(size) {
  this.scm_Builder$$anon$1__f_self.sizeHint__I__V(size)
});
$c_scm_Builder$$anon$1.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundColl) {
  this.scm_Builder$$anon$1__f_self.sizeHintBounded__I__sc_TraversableLike__V(size, boundColl)
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_self.result__O())
});
$c_scm_Builder$$anon$1.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_Builder$$anon$1(xs)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_Builder$$anon$1(elem)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_Builder$$anon$1(elem)
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Proxy: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
/** @constructor */
function $c_scm_FlatHashTable$$anon$1(outer) {
  this.scm_FlatHashTable$$anon$1__f_i = 0;
  this.scm_FlatHashTable$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.scm_FlatHashTable$$anon$1__f_$outer = outer
  };
  this.scm_FlatHashTable$$anon$1__f_i = 0
}
$c_scm_FlatHashTable$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_scm_FlatHashTable$$anon$1.prototype.constructor = $c_scm_FlatHashTable$$anon$1;
/** @constructor */
function $h_scm_FlatHashTable$$anon$1() {
  /*<skip>*/
}
$h_scm_FlatHashTable$$anon$1.prototype = $c_scm_FlatHashTable$$anon$1.prototype;
$c_scm_FlatHashTable$$anon$1.prototype.hasNext__Z = (function() {
  while (((this.scm_FlatHashTable$$anon$1__f_i < this.scm_FlatHashTable$$anon$1__f_$outer.scm_HashSet__f_table.u.length) && (this.scm_FlatHashTable$$anon$1__f_$outer.scm_HashSet__f_table.get(this.scm_FlatHashTable$$anon$1__f_i) === null))) {
    this.scm_FlatHashTable$$anon$1__f_i = ((1 + this.scm_FlatHashTable$$anon$1__f_i) | 0)
  };
  return (this.scm_FlatHashTable$$anon$1__f_i < this.scm_FlatHashTable$$anon$1__f_$outer.scm_HashSet__f_table.u.length)
});
$c_scm_FlatHashTable$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.scm_FlatHashTable$$anon$1__f_i = ((1 + this.scm_FlatHashTable$$anon$1__f_i) | 0);
    var this$1 = this.scm_FlatHashTable$$anon$1__f_$outer;
    var entry = this.scm_FlatHashTable$$anon$1__f_$outer.scm_HashSet__f_table.get((((-1) + this.scm_FlatHashTable$$anon$1__f_i) | 0));
    return $s_scm_FlatHashTable$HashUtils$class__entryToElem__scm_FlatHashTable$HashUtils__O__O(this$1, entry)
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
var $d_scm_FlatHashTable$$anon$1 = new $TypeData().initClass({
  scm_FlatHashTable$$anon$1: 0
}, false, "scala.collection.mutable.FlatHashTable$$anon$1", {
  scm_FlatHashTable$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_FlatHashTable$$anon$1.prototype.$classData = $d_scm_FlatHashTable$$anon$1;
/** @constructor */
function $c_scm_HashTable$$anon$1(outer) {
  this.scm_HashTable$$anon$1__f_iterTable = null;
  this.scm_HashTable$$anon$1__f_idx = 0;
  this.scm_HashTable$$anon$1__f_es = null;
  this.scm_HashTable$$anon$1__f_iterTable = outer.scm_HashMap__f_table;
  this.scm_HashTable$$anon$1__f_idx = $s_scm_HashTable$class__scala$collection$mutable$HashTable$$lastPopulatedIndex__scm_HashTable__I(outer);
  this.scm_HashTable$$anon$1__f_es = this.scm_HashTable$$anon$1__f_iterTable.get(this.scm_HashTable$$anon$1__f_idx)
}
$c_scm_HashTable$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_scm_HashTable$$anon$1.prototype.constructor = $c_scm_HashTable$$anon$1;
/** @constructor */
function $h_scm_HashTable$$anon$1() {
  /*<skip>*/
}
$h_scm_HashTable$$anon$1.prototype = $c_scm_HashTable$$anon$1.prototype;
$c_scm_HashTable$$anon$1.prototype.hasNext__Z = (function() {
  return (this.scm_HashTable$$anon$1__f_es !== null)
});
$c_scm_HashTable$$anon$1.prototype.next__scm_HashEntry = (function() {
  var res = this.scm_HashTable$$anon$1__f_es;
  this.scm_HashTable$$anon$1__f_es = $as_scm_HashEntry(this.scm_HashTable$$anon$1__f_es.scm_DefaultEntry__f_next);
  while (((this.scm_HashTable$$anon$1__f_es === null) && (this.scm_HashTable$$anon$1__f_idx > 0))) {
    this.scm_HashTable$$anon$1__f_idx = (((-1) + this.scm_HashTable$$anon$1__f_idx) | 0);
    this.scm_HashTable$$anon$1__f_es = this.scm_HashTable$$anon$1__f_iterTable.get(this.scm_HashTable$$anon$1__f_idx)
  };
  return res
});
$c_scm_HashTable$$anon$1.prototype.next__O = (function() {
  return this.next__scm_HashEntry()
});
var $d_scm_HashTable$$anon$1 = new $TypeData().initClass({
  scm_HashTable$$anon$1: 0
}, false, "scala.collection.mutable.HashTable$$anon$1", {
  scm_HashTable$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_HashTable$$anon$1.prototype.$classData = $d_scm_HashTable$$anon$1;
/** @constructor */
function $c_scm_Iterable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_Iterable$.prototype = new $h_scg_GenTraversableFactory();
$c_scm_Iterable$.prototype.constructor = $c_scm_Iterable$;
/** @constructor */
function $h_scm_Iterable$() {
  /*<skip>*/
}
$h_scm_Iterable$.prototype = $c_scm_Iterable$.prototype;
$c_scm_Iterable$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
});
var $d_scm_Iterable$ = new $TypeData().initClass({
  scm_Iterable$: 0
}, false, "scala.collection.mutable.Iterable$", {
  scm_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_scm_Iterable$.prototype.$classData = $d_scm_Iterable$;
var $n_scm_Iterable$;
function $m_scm_Iterable$() {
  if ((!$n_scm_Iterable$)) {
    $n_scm_Iterable$ = new $c_scm_Iterable$()
  };
  return $n_scm_Iterable$
}
/** @constructor */
function $c_scm_LinkedListLike$$anon$1(outer) {
  this.scm_LinkedListLike$$anon$1__f_elems = null;
  this.scm_LinkedListLike$$anon$1__f_elems = outer
}
$c_scm_LinkedListLike$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_scm_LinkedListLike$$anon$1.prototype.constructor = $c_scm_LinkedListLike$$anon$1;
/** @constructor */
function $h_scm_LinkedListLike$$anon$1() {
  /*<skip>*/
}
$h_scm_LinkedListLike$$anon$1.prototype = $c_scm_LinkedListLike$$anon$1.prototype;
$c_scm_LinkedListLike$$anon$1.prototype.hasNext__Z = (function() {
  var this$1 = this.scm_LinkedListLike$$anon$1__f_elems;
  return (!this$1.isEmpty__Z())
});
$c_scm_LinkedListLike$$anon$1.prototype.next__O = (function() {
  var res = this.scm_LinkedListLike$$anon$1__f_elems.scm_LinkedList__f_elem;
  this.scm_LinkedListLike$$anon$1__f_elems = $as_scm_LinkedListLike(this.scm_LinkedListLike$$anon$1__f_elems.scm_LinkedList__f_next);
  return res
});
var $d_scm_LinkedListLike$$anon$1 = new $TypeData().initClass({
  scm_LinkedListLike$$anon$1: 0
}, false, "scala.collection.mutable.LinkedListLike$$anon$1", {
  scm_LinkedListLike$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_LinkedListLike$$anon$1.prototype.$classData = $d_scm_LinkedListLike$$anon$1;
/** @constructor */
function $c_scm_ListBuffer$$anon$1(outer) {
  this.scm_ListBuffer$$anon$1__f_cursor = null;
  this.scm_ListBuffer$$anon$1__f_cursor = (outer.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.isEmpty__Z() ? $m_sci_Nil$() : outer.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start)
}
$c_scm_ListBuffer$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_scm_ListBuffer$$anon$1.prototype.constructor = $c_scm_ListBuffer$$anon$1;
/** @constructor */
function $h_scm_ListBuffer$$anon$1() {
  /*<skip>*/
}
$h_scm_ListBuffer$$anon$1.prototype = $c_scm_ListBuffer$$anon$1.prototype;
$c_scm_ListBuffer$$anon$1.prototype.hasNext__Z = (function() {
  return (this.scm_ListBuffer$$anon$1__f_cursor !== $m_sci_Nil$())
});
$c_scm_ListBuffer$$anon$1.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty Iterator")
  } else {
    var ans = this.scm_ListBuffer$$anon$1__f_cursor.head__O();
    var this$1 = this.scm_ListBuffer$$anon$1__f_cursor;
    this.scm_ListBuffer$$anon$1__f_cursor = this$1.tail__sci_List();
    return ans
  }
});
var $d_scm_ListBuffer$$anon$1 = new $TypeData().initClass({
  scm_ListBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ListBuffer$$anon$1", {
  scm_ListBuffer$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_ListBuffer$$anon$1.prototype.$classData = $d_scm_ListBuffer$$anon$1;
/** @constructor */
function $c_scm_MutableList$$anon$1(outer) {
  this.scm_MutableList$$anon$1__f_elems = null;
  this.scm_MutableList$$anon$1__f_count = 0;
  this.scm_MutableList$$anon$1__f_elems = outer.scm_MutableList__f_first0;
  this.scm_MutableList$$anon$1__f_count = outer.scm_MutableList__f_len
}
$c_scm_MutableList$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_scm_MutableList$$anon$1.prototype.constructor = $c_scm_MutableList$$anon$1;
/** @constructor */
function $h_scm_MutableList$$anon$1() {
  /*<skip>*/
}
$h_scm_MutableList$$anon$1.prototype = $c_scm_MutableList$$anon$1.prototype;
$c_scm_MutableList$$anon$1.prototype.hasNext__Z = (function() {
  if ((this.scm_MutableList$$anon$1__f_count > 0)) {
    var this$1 = this.scm_MutableList$$anon$1__f_elems;
    return (!$s_scm_LinkedListLike$class__isEmpty__scm_LinkedListLike__Z(this$1))
  } else {
    return false
  }
});
$c_scm_MutableList$$anon$1.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  };
  this.scm_MutableList$$anon$1__f_count = (((-1) + this.scm_MutableList$$anon$1__f_count) | 0);
  var e = this.scm_MutableList$$anon$1__f_elems.scm_LinkedList__f_elem;
  this.scm_MutableList$$anon$1__f_elems = ((this.scm_MutableList$$anon$1__f_count === 0) ? null : $as_scm_LinkedList(this.scm_MutableList$$anon$1__f_elems.scm_LinkedList__f_next));
  return e
});
var $d_scm_MutableList$$anon$1 = new $TypeData().initClass({
  scm_MutableList$$anon$1: 0
}, false, "scala.collection.mutable.MutableList$$anon$1", {
  scm_MutableList$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_MutableList$$anon$1.prototype.$classData = $d_scm_MutableList$$anon$1;
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_s_util_control_BreakControl extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $s_s_util_control_NoStackTrace$class__fillInStackTrace__s_util_control_NoStackTrace__jl_Throwable(this)
  };
}
var $d_s_util_control_BreakControl = new $TypeData().initClass({
  s_util_control_BreakControl: 0
}, false, "scala.util.control.BreakControl", {
  s_util_control_BreakControl: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_ControlThrowable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_util_control_BreakControl.prototype.$classData = $d_s_util_control_BreakControl;
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_Black$() {
  /*<skip>*/
}
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype = new $h_O();
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_Black$;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_Black$() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_Black$.prototype = $c_LDearHenry_BlackAndWhiteChess_Black$.prototype;
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.color__T = (function() {
  return "black"
});
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.productPrefix__T = (function() {
  return "Black"
});
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.productArity__I = (function() {
  return 0
});
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.hashCode__I = (function() {
  return 64266207
});
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.toString__T = (function() {
  return "Black"
});
var $d_LDearHenry_BlackAndWhiteChess_Black$ = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_Black$: 0
}, false, "DearHenry.BlackAndWhiteChess.Black$", {
  LDearHenry_BlackAndWhiteChess_Black$: 1,
  O: 1,
  LDearHenry_BlackAndWhiteChess_GridStatus: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_LDearHenry_BlackAndWhiteChess_Black$.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_Black$;
var $n_LDearHenry_BlackAndWhiteChess_Black$;
function $m_LDearHenry_BlackAndWhiteChess_Black$() {
  if ((!$n_LDearHenry_BlackAndWhiteChess_Black$)) {
    $n_LDearHenry_BlackAndWhiteChess_Black$ = new $c_LDearHenry_BlackAndWhiteChess_Black$()
  };
  return $n_LDearHenry_BlackAndWhiteChess_Black$
}
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_Empty$() {
  /*<skip>*/
}
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype = new $h_O();
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_Empty$;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_Empty$() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_Empty$.prototype = $c_LDearHenry_BlackAndWhiteChess_Empty$.prototype;
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.color__T = (function() {
  return ""
});
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.productPrefix__T = (function() {
  return "Empty"
});
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.productArity__I = (function() {
  return 0
});
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.hashCode__I = (function() {
  return 67081517
});
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.toString__T = (function() {
  return "Empty"
});
var $d_LDearHenry_BlackAndWhiteChess_Empty$ = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_Empty$: 0
}, false, "DearHenry.BlackAndWhiteChess.Empty$", {
  LDearHenry_BlackAndWhiteChess_Empty$: 1,
  O: 1,
  LDearHenry_BlackAndWhiteChess_GridStatus: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_LDearHenry_BlackAndWhiteChess_Empty$.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_Empty$;
var $n_LDearHenry_BlackAndWhiteChess_Empty$;
function $m_LDearHenry_BlackAndWhiteChess_Empty$() {
  if ((!$n_LDearHenry_BlackAndWhiteChess_Empty$)) {
    $n_LDearHenry_BlackAndWhiteChess_Empty$ = new $c_LDearHenry_BlackAndWhiteChess_Empty$()
  };
  return $n_LDearHenry_BlackAndWhiteChess_Empty$
}
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$() {
  /*<skip>*/
}
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype = new $h_O();
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype = $c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype;
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype.productPrefix__T = (function() {
  return "GameStatusAcceptInput"
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype.productArity__I = (function() {
  return 0
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype.hashCode__I = (function() {
  return 570411614
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype.toString__T = (function() {
  return "GameStatusAcceptInput"
});
var $d_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$ = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$: 0
}, false, "DearHenry.BlackAndWhiteChess.GameStatusAcceptInput$", {
  LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$: 1,
  O: 1,
  LDearHenry_BlackAndWhiteChess_GameStatus: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$;
var $n_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$;
function $m_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$() {
  if ((!$n_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$)) {
    $n_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$ = new $c_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$()
  };
  return $n_LDearHenry_BlackAndWhiteChess_GameStatusAcceptInput$
}
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$() {
  /*<skip>*/
}
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype = new $h_O();
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype = $c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype;
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype.productPrefix__T = (function() {
  return "GameStatusInAnimation"
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype.productArity__I = (function() {
  return 0
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype.hashCode__I = (function() {
  return (-1053271397)
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype.toString__T = (function() {
  return "GameStatusInAnimation"
});
var $d_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$ = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$: 0
}, false, "DearHenry.BlackAndWhiteChess.GameStatusInAnimation$", {
  LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$: 1,
  O: 1,
  LDearHenry_BlackAndWhiteChess_GameStatus: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$;
var $n_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$;
function $m_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$() {
  if ((!$n_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$)) {
    $n_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$ = new $c_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$()
  };
  return $n_LDearHenry_BlackAndWhiteChess_GameStatusInAnimation$
}
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_White$() {
  /*<skip>*/
}
$c_LDearHenry_BlackAndWhiteChess_White$.prototype = new $h_O();
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_White$;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_White$() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_White$.prototype = $c_LDearHenry_BlackAndWhiteChess_White$.prototype;
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.color__T = (function() {
  return "white"
});
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.productPrefix__T = (function() {
  return "White"
});
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.productArity__I = (function() {
  return 0
});
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.hashCode__I = (function() {
  return 83549193
});
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.toString__T = (function() {
  return "White"
});
var $d_LDearHenry_BlackAndWhiteChess_White$ = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_White$: 0
}, false, "DearHenry.BlackAndWhiteChess.White$", {
  LDearHenry_BlackAndWhiteChess_White$: 1,
  O: 1,
  LDearHenry_BlackAndWhiteChess_GridStatus: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_LDearHenry_BlackAndWhiteChess_White$.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_White$;
var $n_LDearHenry_BlackAndWhiteChess_White$;
function $m_LDearHenry_BlackAndWhiteChess_White$() {
  if ((!$n_LDearHenry_BlackAndWhiteChess_White$)) {
    $n_LDearHenry_BlackAndWhiteChess_White$ = new $c_LDearHenry_BlackAndWhiteChess_White$()
  };
  return $n_LDearHenry_BlackAndWhiteChess_White$
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  var value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Double__toString__T($thiz) {
  var d = $uD($thiz);
  return ("" + d)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Float__toString__T($thiz) {
  var f = $uF($thiz);
  return ("" + f)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $uI($thiz)
}
function $f_jl_Integer__toString__T($thiz) {
  var i = $uI($thiz);
  return ("" + i)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $uJ($thiz);
    var b = $uJ(x2);
    return ((this$1.RTLong__f_lo === b.RTLong__f_lo) && (this$1.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var t = $uJ($thiz);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  return (lo ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  var this$1 = $uJ($thiz);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this$1.RTLong__f_lo, this$1.RTLong__f_hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    var $$x1 = res;
    var index = i;
    res = (($$x1 + Math.imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().toString__I__T(ch);
  return $uI($thiz.indexOf(str))
}
function $f_T__indexOf__I__I__I($thiz, ch, fromIndex) {
  var str = $m_jl_Character$().toString__I__T(ch);
  return $uI($thiz.indexOf(str, fromIndex))
}
function $f_T__lastIndexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().toString__I__T(ch);
  return $uI($thiz.lastIndexOf(str))
}
function $f_T__substring__I__I__T($thiz, beginIndex, endIndex) {
  return $as_T($thiz.substring(beginIndex, endIndex))
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_s_None$() {
  /*<skip>*/
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
  /*<skip>*/
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.isEmpty__Z = (function() {
  return true
});
$c_s_None$.prototype.get__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None"
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880
});
$c_s_None$.prototype.toString__T = (function() {
  return "None"
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E()
});
var $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
/** @constructor */
function $c_s_Some(x) {
  this.s_Some__f_x = null;
  this.s_Some__f_x = x
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
  /*<skip>*/
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.isEmpty__Z = (function() {
  return false
});
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_x
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  if ((x$1 === 0)) {
    return this.s_Some__f_x
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  }
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_x, Some$1.s_Some__f_x)
  } else {
    return false
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
var $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
class $c_s_StringContext$InvalidEscapeException extends $c_jl_IllegalArgumentException {
  constructor(str, index) {
    super();
    this.s_StringContext$InvalidEscapeException__f_index = 0;
    this.s_StringContext$InvalidEscapeException__f_index = index;
    var array = ["invalid escape ", " index ", " in \"", "\". Use \\\\\\\\ for literal \\\\."];
    var $$x3 = new $c_s_StringContext($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array));
    $m_s_Predef$().require__Z__V(((index >= 0) && (index < $uI(str.length))));
    if ((index === (((-1) + $uI(str.length)) | 0))) {
      var $$x1 = "at terminal"
    } else {
      var array$1 = ["'\\\\", "' not one of ", " at"];
      var $$x2 = new $c_s_StringContext($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1));
      var index$1 = ((1 + index) | 0);
      var array$2 = [$bC((65535 & $uI(str.charCodeAt(index$1)))), "[\\b, \\t, \\n, \\f, \\r, \\\\, \\\", \\']"];
      var $$x1 = $$x2.s__sc_Seq__T($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2))
    };
    var array$3 = [$$x1, index, str];
    var s = $$x3.s__sc_Seq__T($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3));
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_s_StringContext$InvalidEscapeException = new $TypeData().initClass({
  s_StringContext$InvalidEscapeException: 0
}, false, "scala.StringContext$InvalidEscapeException", {
  s_StringContext$InvalidEscapeException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_StringContext$InvalidEscapeException.prototype.$classData = $d_s_StringContext$InvalidEscapeException;
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.T2__f__1 = _1;
  $thiz.T2__f__2 = _2;
  return $thiz
}
/** @constructor */
function $c_T2() {
  this.T2__f__1 = null;
  this.T2__f__2 = null
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $s_s_Product2$class__productElement__s_Product2__I__O(this, n)
});
$c_T2.prototype._1__O = (function() {
  return this.T2__f__1
});
$c_T2.prototype._2__O = (function() {
  return this.T2__f__2
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this._1__O()) + ",") + this._2__O()) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this._1__O(), Tuple2$1._1__O()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this._2__O(), Tuple2$1._2__O()))
  } else {
    return false
  }
});
$c_T2.prototype._1$mcI$sp__I = (function() {
  return $uI(this._1__O())
});
$c_T2.prototype._2$mcI$sp__I = (function() {
  return $uI(this._2__O())
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.T4__f__1 = null;
  this.T4__f__2 = null;
  this.T4__f__3 = null;
  this.T4__f__4 = null;
  this.T4__f__1 = _1;
  this.T4__f__2 = _2;
  this.T4__f__3 = _3;
  this.T4__f__4 = _4
}
$c_T4.prototype = new $h_O();
$c_T4.prototype.constructor = $c_T4;
/** @constructor */
function $h_T4() {
  /*<skip>*/
}
$h_T4.prototype = $c_T4.prototype;
$c_T4.prototype.productArity__I = (function() {
  return 4
});
$c_T4.prototype.productElement__I__O = (function(n) {
  return $s_s_Product4$class__productElement__s_Product4__I__O(this, n)
});
$c_T4.prototype.toString__T = (function() {
  return (((((((("(" + this.T4__f__1) + ",") + this.T4__f__2) + ",") + this.T4__f__3) + ",") + this.T4__f__4) + ")")
});
$c_T4.prototype.productPrefix__T = (function() {
  return "Tuple4"
});
$c_T4.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T4.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_T4.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T4)) {
    var Tuple4$1 = $as_T4(x$1);
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(this.T4__f__1, Tuple4$1.T4__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T4__f__2, Tuple4$1.T4__f__2)) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T4__f__3, Tuple4$1.T4__f__3)) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T4__f__4, Tuple4$1.T4__f__4))
  } else {
    return false
  }
});
function $as_T4(obj) {
  return (((obj instanceof $c_T4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple4"))
}
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T4)))
}
function $asArrayOf_T4(obj, depth) {
  return (($isArrayOf_T4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple4;", depth))
}
var $d_T4 = new $TypeData().initClass({
  T4: 0
}, false, "scala.Tuple4", {
  T4: 1,
  O: 1,
  s_Product4: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_T4.prototype.$classData = $d_T4;
function $is_sc_GenTraversable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversable)))
}
function $as_sc_GenTraversable(obj) {
  return (($is_sc_GenTraversable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversable"))
}
function $isArrayOf_sc_GenTraversable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversable)))
}
function $asArrayOf_sc_GenTraversable(obj, depth) {
  return (($isArrayOf_sc_GenTraversable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversable;", depth))
}
/** @constructor */
function $c_scg_SeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_SeqFactory.prototype = new $h_scg_GenSeqFactory();
$c_scg_SeqFactory.prototype.constructor = $c_scg_SeqFactory;
/** @constructor */
function $h_scg_SeqFactory() {
  /*<skip>*/
}
$h_scg_SeqFactory.prototype = $c_scg_SeqFactory.prototype;
/** @constructor */
function $c_sci_HashSet$HashTrieSet$$anon$1(outer) {
  this.sci_TrieIterator__f_elems = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  $ct_sci_TrieIterator__Asci_Iterable__(this, outer.sci_HashSet$HashTrieSet__f_elems)
}
$c_sci_HashSet$HashTrieSet$$anon$1.prototype = new $h_sci_TrieIterator();
$c_sci_HashSet$HashTrieSet$$anon$1.prototype.constructor = $c_sci_HashSet$HashTrieSet$$anon$1;
/** @constructor */
function $h_sci_HashSet$HashTrieSet$$anon$1() {
  /*<skip>*/
}
$h_sci_HashSet$HashTrieSet$$anon$1.prototype = $c_sci_HashSet$HashTrieSet$$anon$1.prototype;
var $d_sci_HashSet$HashTrieSet$$anon$1 = new $TypeData().initClass({
  sci_HashSet$HashTrieSet$$anon$1: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet$$anon$1", {
  sci_HashSet$HashTrieSet$$anon$1: 1,
  sci_TrieIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_HashSet$HashTrieSet$$anon$1.prototype.$classData = $d_sci_HashSet$HashTrieSet$$anon$1;
/** @constructor */
function $c_sci_Set$() {
  /*<skip>*/
}
$c_sci_Set$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_Set$.prototype.constructor = $c_sci_Set$;
/** @constructor */
function $h_sci_Set$() {
  /*<skip>*/
}
$h_sci_Set$.prototype = $c_sci_Set$.prototype;
$c_sci_Set$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_Set$EmptySet$()
});
var $d_sci_Set$ = new $TypeData().initClass({
  sci_Set$: 0
}, false, "scala.collection.immutable.Set$", {
  sci_Set$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Set$.prototype.$classData = $d_sci_Set$;
var $n_sci_Set$;
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$()
  };
  return $n_sci_Set$
}
/** @constructor */
function $c_sci_VectorIterator(_startIndex, endIndex) {
  this.sci_VectorIterator__f_endIndex = 0;
  this.sci_VectorIterator__f_blockIndex = 0;
  this.sci_VectorIterator__f_lo = 0;
  this.sci_VectorIterator__f_endLo = 0;
  this.sci_VectorIterator__f__hasNext = false;
  this.sci_VectorIterator__f_depth = 0;
  this.sci_VectorIterator__f_display0 = null;
  this.sci_VectorIterator__f_display1 = null;
  this.sci_VectorIterator__f_display2 = null;
  this.sci_VectorIterator__f_display3 = null;
  this.sci_VectorIterator__f_display4 = null;
  this.sci_VectorIterator__f_display5 = null;
  this.sci_VectorIterator__f_endIndex = endIndex;
  this.sci_VectorIterator__f_blockIndex = ((-32) & _startIndex);
  this.sci_VectorIterator__f_lo = (31 & _startIndex);
  var x = ((endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
  this.sci_VectorIterator__f_endLo = ((x < 32) ? x : 32);
  this.sci_VectorIterator__f__hasNext = (((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < endIndex)
}
$c_sci_VectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_VectorIterator.prototype.constructor = $c_sci_VectorIterator;
/** @constructor */
function $h_sci_VectorIterator() {
  /*<skip>*/
}
$h_sci_VectorIterator.prototype = $c_sci_VectorIterator.prototype;
$c_sci_VectorIterator.prototype.depth__I = (function() {
  return this.sci_VectorIterator__f_depth
});
$c_sci_VectorIterator.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_VectorIterator__f_depth = x$1
});
$c_sci_VectorIterator.prototype.display0__AO = (function() {
  return this.sci_VectorIterator__f_display0
});
$c_sci_VectorIterator.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display0 = x$1
});
$c_sci_VectorIterator.prototype.display1__AO = (function() {
  return this.sci_VectorIterator__f_display1
});
$c_sci_VectorIterator.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display1 = x$1
});
$c_sci_VectorIterator.prototype.display2__AO = (function() {
  return this.sci_VectorIterator__f_display2
});
$c_sci_VectorIterator.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display2 = x$1
});
$c_sci_VectorIterator.prototype.display3__AO = (function() {
  return this.sci_VectorIterator__f_display3
});
$c_sci_VectorIterator.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display3 = x$1
});
$c_sci_VectorIterator.prototype.display4__AO = (function() {
  return this.sci_VectorIterator__f_display4
});
$c_sci_VectorIterator.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display4 = x$1
});
$c_sci_VectorIterator.prototype.display5__AO = (function() {
  return this.sci_VectorIterator__f_display5
});
$c_sci_VectorIterator.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display5 = x$1
});
$c_sci_VectorIterator.prototype.hasNext__Z = (function() {
  return this.sci_VectorIterator__f__hasNext
});
$c_sci_VectorIterator.prototype.next__O = (function() {
  if ((!this.sci_VectorIterator__f__hasNext)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "reached iterator end")
  };
  var res = this.sci_VectorIterator__f_display0.get(this.sci_VectorIterator__f_lo);
  this.sci_VectorIterator__f_lo = ((1 + this.sci_VectorIterator__f_lo) | 0);
  if ((this.sci_VectorIterator__f_lo === this.sci_VectorIterator__f_endLo)) {
    if ((((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < this.sci_VectorIterator__f_endIndex)) {
      var newBlockIndex = ((32 + this.sci_VectorIterator__f_blockIndex) | 0);
      var xor = (this.sci_VectorIterator__f_blockIndex ^ newBlockIndex);
      $s_sci_VectorPointer$class__gotoNextBlockStart__sci_VectorPointer__I__I__V(this, newBlockIndex, xor);
      this.sci_VectorIterator__f_blockIndex = newBlockIndex;
      var x = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
      this.sci_VectorIterator__f_endLo = ((x < 32) ? x : 32);
      this.sci_VectorIterator__f_lo = 0
    } else {
      this.sci_VectorIterator__f__hasNext = false
    }
  };
  return res
});
var $d_sci_VectorIterator = new $TypeData().initClass({
  sci_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", {
  sci_VectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorIterator.prototype.$classData = $d_sci_VectorIterator;
/** @constructor */
function $c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4(outer) {
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4__f_$outer = null;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4__f_$outer = outer
  }
}
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4.prototype = new $h_sr_AbstractFunction0$mcV$sp();
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4.prototype.constructor = $c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4;
/** @constructor */
function $h_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4() {
  /*<skip>*/
}
$h_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4.prototype = $c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4.prototype;
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4.prototype.apply$mcV$sp__V = (function() {
  var this$1 = this.LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4__f_$outer.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var elem = 0;
  elem = 0;
  var i = 0;
  var top = this$1.scm_ArrayBuffer__f_size0;
  while ((i < top)) {
    var arg1 = this$1.scm_ArrayBuffer__f_array.get(i);
    var x$15 = $as_LDearHenry_BlackAndWhiteChess_GridStatus(arg1);
    var x$2 = $m_LDearHenry_BlackAndWhiteChess_Black$();
    if (((x$15 !== null) && (x$15 === x$2))) {
      elem = ((1 + elem) | 0)
    };
    i = ((1 + i) | 0)
  };
  var blackCount = elem;
  var this$3 = this.LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4__f_$outer.LDearHenry_BlackAndWhiteChess_BoardSprite__f_DearHenry$BlackAndWhiteChess$BoardSprite$$grids;
  var elem$1 = 0;
  elem$1 = 0;
  var i$1 = 0;
  var top$1 = this$3.scm_ArrayBuffer__f_size0;
  while ((i$1 < top$1)) {
    var arg1$1 = this$3.scm_ArrayBuffer__f_array.get(i$1);
    var x$16 = $as_LDearHenry_BlackAndWhiteChess_GridStatus(arg1$1);
    var x$2$1 = $m_LDearHenry_BlackAndWhiteChess_White$();
    if (((x$16 !== null) && (x$16 === x$2$1))) {
      elem$1 = ((1 + elem$1) | 0)
    };
    i$1 = ((1 + i$1) | 0)
  };
  var whiteCount = elem$1;
  if ((blackCount > whiteCount)) {
    var array = ["", "\u83b7\u80dc"];
    var $$x1 = new $c_s_StringContext($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array));
    var array$1 = [$m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnNames.get($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_blackTurn)];
    var message = $$x1.s__sc_Seq__T($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1))
  } else if ((blackCount < whiteCount)) {
    var array$2 = ["", "\u83b7\u80dc"];
    var $$x2 = new $c_s_StringContext($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2));
    var array$3 = [$m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_turnNames.get($m_LDearHenry_BlackAndWhiteChess_BoardSprite$().LDearHenry_BlackAndWhiteChess_BoardSprite$__f_whiteTurn)];
    var message = $$x2.s__sc_Seq__T($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3))
  } else {
    var message = "\u53cc\u65b9\u548c\u68cb"
  };
  var this$13 = this.LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4__f_$outer;
  this$13.LDearHenry_engine_Sprite__f_engine.alert__T__V(("\u6e38\u620f\u7ed3\u675f:" + message));
  this.LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4__f_$outer.DearHenry$BlackAndWhiteChess$BoardSprite$$reset__V()
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4.prototype.apply__O = (function() {
  this.apply$mcV$sp__V()
});
var $d_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4 = new $TypeData().initClass({
  LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4: 0
}, false, "DearHenry.BlackAndWhiteChess.BoardSprite$$anonfun$paint$4", {
  LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4: 1,
  sr_AbstractFunction0$mcV$sp: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1,
  F0$mcV$sp: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4.prototype.$classData = $d_LDearHenry_BlackAndWhiteChess_BoardSprite$$anonfun$paint$4;
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $thiz.Ljava_io_PrintStream__f_java$io$PrintStream$$autoFlush = autoFlush;
  $thiz.Ljava_io_PrintStream__f_charset = charset;
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  $thiz.Ljava_io_PrintStream__f_java$io$PrintStream$$closing = false;
  $thiz.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
  $thiz.Ljava_io_PrintStream__f_errorFlag = false;
  return $thiz
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
  this.Ljava_io_FilterOutputStream__f_out = null;
  this.Ljava_io_PrintStream__f_java$io$PrintStream$$autoFlush = false;
  this.Ljava_io_PrintStream__f_charset = null;
  this.Ljava_io_PrintStream__f_java$io$PrintStream$$encoder = null;
  this.Ljava_io_PrintStream__f_java$io$PrintStream$$closing = false;
  this.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
  this.Ljava_io_PrintStream__f_errorFlag = false;
  this.Ljava_io_PrintStream__f_bitmap$0 = false
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
  /*<skip>*/
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"))
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)))
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth))
}
/** @constructor */
function $c_sc_Seq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_Seq$.prototype = new $h_scg_SeqFactory();
$c_sc_Seq$.prototype.constructor = $c_sc_Seq$;
/** @constructor */
function $h_sc_Seq$() {
  /*<skip>*/
}
$h_sc_Seq$.prototype = $c_sc_Seq$.prototype;
$c_sc_Seq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Seq$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Seq$ = new $TypeData().initClass({
  sc_Seq$: 0
}, false, "scala.collection.Seq$", {
  sc_Seq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Seq$.prototype.$classData = $d_sc_Seq$;
var $n_sc_Seq$;
function $m_sc_Seq$() {
  if ((!$n_sc_Seq$)) {
    $n_sc_Seq$ = new $c_sc_Seq$()
  };
  return $n_sc_Seq$
}
/** @constructor */
function $c_scg_IndexedSeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_IndexedSeqFactory.prototype = new $h_scg_SeqFactory();
$c_scg_IndexedSeqFactory.prototype.constructor = $c_scg_IndexedSeqFactory;
/** @constructor */
function $h_scg_IndexedSeqFactory() {
  /*<skip>*/
}
$h_scg_IndexedSeqFactory.prototype = $c_scg_IndexedSeqFactory.prototype;
/** @constructor */
function $c_sci_Seq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Seq$.prototype = new $h_scg_SeqFactory();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
$c_sci_Seq$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_IndexedSeq$.prototype = new $h_scg_SeqFactory();
$c_scm_IndexedSeq$.prototype.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
  /*<skip>*/
}
$h_scm_IndexedSeq$.prototype = $c_scm_IndexedSeq$.prototype;
$c_scm_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
});
var $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sjs_js_WrappedArray$.prototype = new $h_scg_SeqFactory();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if ($thiz.jl_JSConsoleBasedPrintStream__f_isErr) {
      var x = console.error;
      var $$x1 = $uZ((!(!x)))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      console.error(line)
    } else {
      console.log(line)
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.Ljava_io_FilterOutputStream__f_out = null;
  this.Ljava_io_PrintStream__f_java$io$PrintStream$$autoFlush = false;
  this.Ljava_io_PrintStream__f_charset = null;
  this.Ljava_io_PrintStream__f_java$io$PrintStream$$encoder = null;
  this.Ljava_io_PrintStream__f_java$io$PrintStream$$closing = false;
  this.Ljava_io_PrintStream__f_java$io$PrintStream$$closed = false;
  this.Ljava_io_PrintStream__f_errorFlag = false;
  this.Ljava_io_PrintStream__f_bitmap$0 = false;
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_flushed = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_flushed = true;
  this.jl_JSConsoleBasedPrintStream__f_buffer = ""
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
  /*<skip>*/
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      this.jl_JSConsoleBasedPrintStream__f_flushed = false;
      rest = ""
    } else {
      var $$x1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$3 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $$x1) + $as_T(this$3.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      this.jl_JSConsoleBasedPrintStream__f_flushed = true;
      var this$4 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = $as_T(this$4.substring(beginIndex))
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream", {
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
});
$c_jl_JSConsoleBasedPrintStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $c_T2$mcII$sp(_1$mcI$sp, _2$mcI$sp) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2$mcII$sp__f__1$mcI$sp = 0;
  this.T2$mcII$sp__f__2$mcI$sp = 0;
  this.T2$mcII$sp__f__1$mcI$sp = _1$mcI$sp;
  this.T2$mcII$sp__f__2$mcI$sp = _2$mcI$sp;
  $ct_T2__O__O__(this, null, null)
}
$c_T2$mcII$sp.prototype = new $h_T2();
$c_T2$mcII$sp.prototype.constructor = $c_T2$mcII$sp;
/** @constructor */
function $h_T2$mcII$sp() {
  /*<skip>*/
}
$h_T2$mcII$sp.prototype = $c_T2$mcII$sp.prototype;
$c_T2$mcII$sp.prototype._1$mcI$sp__I = (function() {
  return this.T2$mcII$sp__f__1$mcI$sp
});
$c_T2$mcII$sp.prototype._2$mcI$sp__I = (function() {
  return this.T2$mcII$sp__f__2$mcI$sp
});
$c_T2$mcII$sp.prototype._2__O = (function() {
  return this.T2$mcII$sp__f__2$mcI$sp
});
$c_T2$mcII$sp.prototype._1__O = (function() {
  return this.T2$mcII$sp__f__1$mcI$sp
});
var $d_T2$mcII$sp = new $TypeData().initClass({
  T2$mcII$sp: 0
}, false, "scala.Tuple2$mcII$sp", {
  T2$mcII$sp: 1,
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Product2$mcII$sp: 1
});
$c_T2$mcII$sp.prototype.$classData = $d_T2$mcII$sp;
/** @constructor */
function $c_sc_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sc_IndexedSeq$__f_ReusableCBF = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sc_IndexedSeq$ = this;
  this.sc_IndexedSeq$__f_ReusableCBF = new $c_sc_IndexedSeq$$anon$1()
}
$c_sc_IndexedSeq$.prototype = new $h_scg_IndexedSeqFactory();
$c_sc_IndexedSeq$.prototype.constructor = $c_sc_IndexedSeq$;
/** @constructor */
function $h_sc_IndexedSeq$() {
  /*<skip>*/
}
$h_sc_IndexedSeq$.prototype = $c_sc_IndexedSeq$.prototype;
$c_sc_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  return new $c_sci_VectorBuilder()
});
var $d_sc_IndexedSeq$ = new $TypeData().initClass({
  sc_IndexedSeq$: 0
}, false, "scala.collection.IndexedSeq$", {
  sc_IndexedSeq$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_IndexedSeq$.prototype.$classData = $d_sc_IndexedSeq$;
var $n_sc_IndexedSeq$;
function $m_sc_IndexedSeq$() {
  if ((!$n_sc_IndexedSeq$)) {
    $n_sc_IndexedSeq$ = new $c_sc_IndexedSeq$()
  };
  return $n_sc_IndexedSeq$
}
/** @constructor */
function $c_sc_IndexedSeqLike$Elements(outer, start, end) {
  this.sc_IndexedSeqLike$Elements__f_end = 0;
  this.sc_IndexedSeqLike$Elements__f_index = 0;
  this.sc_IndexedSeqLike$Elements__f_$outer = null;
  this.sc_IndexedSeqLike$Elements__f_end = end;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sc_IndexedSeqLike$Elements__f_$outer = outer
  };
  this.sc_IndexedSeqLike$Elements__f_index = start
}
$c_sc_IndexedSeqLike$Elements.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqLike$Elements.prototype.constructor = $c_sc_IndexedSeqLike$Elements;
/** @constructor */
function $h_sc_IndexedSeqLike$Elements() {
  /*<skip>*/
}
$h_sc_IndexedSeqLike$Elements.prototype = $c_sc_IndexedSeqLike$Elements.prototype;
$c_sc_IndexedSeqLike$Elements.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqLike$Elements__f_index < this.sc_IndexedSeqLike$Elements__f_end)
});
$c_sc_IndexedSeqLike$Elements.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqLike$Elements__f_index >= this.sc_IndexedSeqLike$Elements__f_end)) {
    $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  };
  var x = this.sc_IndexedSeqLike$Elements__f_$outer.apply__I__O(this.sc_IndexedSeqLike$Elements__f_index);
  this.sc_IndexedSeqLike$Elements__f_index = ((1 + this.sc_IndexedSeqLike$Elements__f_index) | 0);
  return x
});
var $d_sc_IndexedSeqLike$Elements = new $TypeData().initClass({
  sc_IndexedSeqLike$Elements: 0
}, false, "scala.collection.IndexedSeqLike$Elements", {
  sc_IndexedSeqLike$Elements: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_BufferedIterator: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqLike$Elements.prototype.$classData = $d_sc_IndexedSeqLike$Elements;
/** @constructor */
function $c_sci_HashSet$() {
  /*<skip>*/
}
$c_sci_HashSet$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_HashSet$.prototype.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
  /*<skip>*/
}
$h_sci_HashSet$.prototype = $c_sci_HashSet$.prototype;
$c_sci_HashSet$.prototype.scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__sci_HashSet$HashTrieSet = (function(hash0, elem0, hash1, elem1, level) {
  var index0 = (31 & ((hash0 >>> level) | 0));
  var index1 = (31 & ((hash1 >>> level) | 0));
  if ((index0 !== index1)) {
    var bitmap = ((1 << index0) | (1 << index1));
    var elems = new ($d_sci_HashSet.getArrayOf().constr)(2);
    if ((index0 < index1)) {
      elems.set(0, elem0);
      elems.set(1, elem1)
    } else {
      elems.set(0, elem1);
      elems.set(1, elem0)
    };
    return new $c_sci_HashSet$HashTrieSet(bitmap, elems, ((elem0.size__I() + elem1.size__I()) | 0))
  } else {
    var elems$2 = new ($d_sci_HashSet.getArrayOf().constr)(1);
    var bitmap$2 = (1 << index0);
    var child = this.scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__sci_HashSet$HashTrieSet(hash0, elem0, hash1, elem1, ((5 + level) | 0));
    elems$2.set(0, child);
    return new $c_sci_HashSet$HashTrieSet(bitmap$2, elems$2, child.sci_HashSet$HashTrieSet__f_size0)
  }
});
$c_sci_HashSet$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_HashSet$EmptyHashSet$()
});
var $d_sci_HashSet$ = new $TypeData().initClass({
  sci_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", {
  sci_HashSet$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$.prototype.$classData = $d_sci_HashSet$;
var $n_sci_HashSet$;
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$()
  };
  return $n_sci_HashSet$
}
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_IndexedSeq$.prototype = new $h_scg_IndexedSeqFactory();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Vector$();
  return new $c_sci_VectorBuilder()
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_ListSet$() {
  /*<skip>*/
}
$c_sci_ListSet$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_ListSet$.prototype.constructor = $c_sci_ListSet$;
/** @constructor */
function $h_sci_ListSet$() {
  /*<skip>*/
}
$h_sci_ListSet$.prototype = $c_sci_ListSet$.prototype;
$c_sci_ListSet$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sci_ListSet$ListSetBuilder__(new $c_sci_ListSet$ListSetBuilder())
});
$c_sci_ListSet$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_ListSet$EmptyListSet$()
});
var $d_sci_ListSet$ = new $TypeData().initClass({
  sci_ListSet$: 0
}, false, "scala.collection.immutable.ListSet$", {
  sci_ListSet$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$.prototype.$classData = $d_sci_ListSet$;
var $n_sci_ListSet$;
function $m_sci_ListSet$() {
  if ((!$n_sci_ListSet$)) {
    $n_sci_ListSet$ = new $c_sci_ListSet$()
  };
  return $n_sci_ListSet$
}
/** @constructor */
function $c_scm_HashSet$() {
  /*<skip>*/
}
$c_scm_HashSet$.prototype = new $h_scg_MutableSetFactory();
$c_scm_HashSet$.prototype.constructor = $c_scm_HashSet$;
/** @constructor */
function $h_scm_HashSet$() {
  /*<skip>*/
}
$h_scm_HashSet$.prototype = $c_scm_HashSet$.prototype;
$c_scm_HashSet$.prototype.empty__sc_GenTraversable = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet())
});
var $d_scm_HashSet$ = new $TypeData().initClass({
  scm_HashSet$: 0
}, false, "scala.collection.mutable.HashSet$", {
  scm_HashSet$: 1,
  scg_MutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashSet$.prototype.$classData = $d_scm_HashSet$;
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$()
  };
  return $n_scm_HashSet$
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.s_reflect_AnyValManifest__f_toString = null
}
$c_s_reflect_AnyValManifest.prototype = new $h_O();
$c_s_reflect_AnyValManifest.prototype.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
  /*<skip>*/
}
$h_s_reflect_AnyValManifest.prototype = $c_s_reflect_AnyValManifest.prototype;
$c_s_reflect_AnyValManifest.prototype.toString__T = (function() {
  return this.s_reflect_AnyValManifest__f_toString
});
$c_s_reflect_AnyValManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_AnyValManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    if ((x$1 === 0)) {
      return this.sjs_js_JavaScriptException__f_exception
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      var JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      var x = this.sjs_js_JavaScriptException__f_exception;
      var y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
var $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
/** @constructor */
function $c_sci_List$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sci_List$__f_partialNotApplied = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sci_List$ = this;
  this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_scg_SeqFactory();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
/** @constructor */
function $c_sci_Stream$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Stream$.prototype = new $h_scg_SeqFactory();
$c_sci_Stream$.prototype.constructor = $c_sci_Stream$;
/** @constructor */
function $h_sci_Stream$() {
  /*<skip>*/
}
$h_sci_Stream$.prototype = $c_sci_Stream$.prototype;
$c_sci_Stream$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_Stream$StreamBuilder()
});
var $d_sci_Stream$ = new $TypeData().initClass({
  sci_Stream$: 0
}, false, "scala.collection.immutable.Stream$", {
  sci_Stream$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$.prototype.$classData = $d_sci_Stream$;
var $n_sci_Stream$;
function $m_sci_Stream$() {
  if ((!$n_sci_Stream$)) {
    $n_sci_Stream$ = new $c_sci_Stream$()
  };
  return $n_sci_Stream$
}
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_ArrayBuffer$.prototype = new $h_scg_SeqFactory();
$c_scm_ArrayBuffer$.prototype.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
  /*<skip>*/
}
$h_scm_ArrayBuffer$.prototype = $c_scm_ArrayBuffer$.prototype;
$c_scm_ArrayBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
});
var $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
/** @constructor */
function $c_scm_LinkedList$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_LinkedList$.prototype = new $h_scg_SeqFactory();
$c_scm_LinkedList$.prototype.constructor = $c_scm_LinkedList$;
/** @constructor */
function $h_scm_LinkedList$() {
  /*<skip>*/
}
$h_scm_LinkedList$.prototype = $c_scm_LinkedList$.prototype;
$c_scm_LinkedList$.prototype.newBuilder__scm_Builder = (function() {
  var this$2 = $ct_scm_MutableList__(new $c_scm_MutableList());
  var f = new $c_sjsr_AnonFunction1(((this$1) => ((l$2) => {
    var l = $as_scm_MutableList(l$2);
    return l.scm_MutableList__f_first0
  }))(this));
  return new $c_scm_Builder$$anon$1(this$2, f)
});
var $d_scm_LinkedList$ = new $TypeData().initClass({
  scm_LinkedList$: 0
}, false, "scala.collection.mutable.LinkedList$", {
  scm_LinkedList$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_LinkedList$.prototype.$classData = $d_scm_LinkedList$;
var $n_scm_LinkedList$;
function $m_scm_LinkedList$() {
  if ((!$n_scm_LinkedList$)) {
    $n_scm_LinkedList$ = new $c_scm_LinkedList$()
  };
  return $n_scm_LinkedList$
}
/** @constructor */
function $c_scm_ListBuffer$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_ListBuffer$.prototype = new $h_scg_SeqFactory();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
  /*<skip>*/
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder(new $c_scm_ListBuffer())
});
var $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
/** @constructor */
function $c_scm_MutableList$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_MutableList$.prototype = new $h_scg_SeqFactory();
$c_scm_MutableList$.prototype.constructor = $c_scm_MutableList$;
/** @constructor */
function $h_scm_MutableList$() {
  /*<skip>*/
}
$h_scm_MutableList$.prototype = $c_scm_MutableList$.prototype;
$c_scm_MutableList$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_MutableList__(new $c_scm_MutableList())
});
var $d_scm_MutableList$ = new $TypeData().initClass({
  scm_MutableList$: 0
}, false, "scala.collection.mutable.MutableList$", {
  scm_MutableList$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_MutableList$.prototype.$classData = $d_scm_MutableList$;
var $n_scm_MutableList$;
function $m_scm_MutableList$() {
  if ((!$n_scm_MutableList$)) {
    $n_scm_MutableList$ = new $c_scm_MutableList$()
  };
  return $n_scm_MutableList$
}
/** @constructor */
function $c_scm_Queue$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_Queue$.prototype = new $h_scg_SeqFactory();
$c_scm_Queue$.prototype.constructor = $c_scm_Queue$;
/** @constructor */
function $h_scm_Queue$() {
  /*<skip>*/
}
$h_scm_Queue$.prototype = $c_scm_Queue$.prototype;
$c_scm_Queue$.prototype.newBuilder__scm_Builder = (function() {
  var this$2 = $ct_scm_MutableList__(new $c_scm_MutableList());
  var f = new $c_sjsr_AnonFunction1(((this$1) => ((x$1$2) => {
    var x$1 = $as_scm_MutableList(x$1$2);
    return $ct_scm_Queue__scm_LinkedList__scm_LinkedList__I__(new $c_scm_Queue(), x$1.scm_MutableList__f_first0, x$1.scm_MutableList__f_last0, x$1.scm_MutableList__f_len)
  }))(this));
  return new $c_scm_Builder$$anon$1(this$2, f)
});
var $d_scm_Queue$ = new $TypeData().initClass({
  scm_Queue$: 0
}, false, "scala.collection.mutable.Queue$", {
  scm_Queue$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Queue$.prototype.$classData = $d_scm_Queue$;
var $n_scm_Queue$;
function $m_scm_Queue$() {
  if ((!$n_scm_Queue$)) {
    $n_scm_Queue$ = new $c_scm_Queue$()
  };
  return $n_scm_Queue$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Boolean"
}
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Byte"
}
$c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $c_s_reflect_ManifestFactory$ByteManifest$.prototype;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Char"
}
$c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$CharManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $c_s_reflect_ManifestFactory$CharManifest$.prototype;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Double"
}
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Float"
}
$c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $c_s_reflect_ManifestFactory$FloatManifest$.prototype;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Int"
}
$c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$IntManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $c_s_reflect_ManifestFactory$IntManifest$.prototype;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Long"
}
$c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$LongManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $c_s_reflect_ManifestFactory$LongManifest$.prototype;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Short"
}
$c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $c_s_reflect_ManifestFactory$ShortManifest$.prototype;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Unit"
}
$c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $c_s_reflect_ManifestFactory$UnitManifest$.prototype;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
/** @constructor */
function $c_sci_Vector$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sci_Vector$__f_NIL = null;
  this.sci_Vector$__f_Log2ConcatFaster = 0;
  this.sci_Vector$__f_TinyAppendFaster = 0;
  $ct_scg_GenTraversableFactory__(this);
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_NIL = new $c_sci_Vector(0, 0, 0)
}
$c_sci_Vector$.prototype = new $h_scg_IndexedSeqFactory();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_VectorBuilder()
});
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyValManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "AnyVal";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyValManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyValManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyValManifest$.prototype = $c_s_reflect_ManifestFactory$AnyValManifest$.prototype;
var $d_s_reflect_ManifestFactory$AnyValManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyValManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyValManifest$", {
  s_reflect_ManifestFactory$AnyValManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyValManifest$;
var $n_s_reflect_ManifestFactory$AnyValManifest$;
function $m_s_reflect_ManifestFactory$AnyValManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyValManifest$)) {
    $n_s_reflect_ManifestFactory$AnyValManifest$ = new $c_s_reflect_ManifestFactory$AnyValManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyValManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $c_s_reflect_ManifestFactory$NothingManifest$.prototype;
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Null$.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NullManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $c_s_reflect_ManifestFactory$NullManifest$.prototype;
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
  var prefix = $m_s_None$();
  var typeArguments = $m_sci_Nil$();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
  this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments
}
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
/** @constructor */
function $c_sc_AbstractTraversable() {
  /*<skip>*/
}
$c_sc_AbstractTraversable.prototype = new $h_O();
$c_sc_AbstractTraversable.prototype.constructor = $c_sc_AbstractTraversable;
/** @constructor */
function $h_sc_AbstractTraversable() {
  /*<skip>*/
}
$h_sc_AbstractTraversable.prototype = $c_sc_AbstractTraversable.prototype;
$c_sc_AbstractTraversable.prototype.newBuilder__scm_Builder = (function() {
  return this.companion__scg_GenericCompanion().newBuilder__scm_Builder()
});
$c_sc_AbstractTraversable.prototype.repr__O = (function() {
  return this
});
$c_sc_AbstractTraversable.prototype.stringPrefix__T = (function() {
  return $s_sc_TraversableLike$class__stringPrefix__sc_TraversableLike__T(this)
});
$c_sc_AbstractTraversable.prototype.nonEmpty__Z = (function() {
  return (!this.isEmpty__Z())
});
$c_sc_AbstractTraversable.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $s_sc_TraversableOnce$class__mkString__sc_TraversableOnce__T__T__T__T(this, start, sep, end)
});
$c_sc_AbstractTraversable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $s_sc_TraversableOnce$class__addString__sc_TraversableOnce__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
function $is_sc_GenMap(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenMap)))
}
function $as_sc_GenMap(obj) {
  return (($is_sc_GenMap(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenMap"))
}
function $isArrayOf_sc_GenMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenMap)))
}
function $asArrayOf_sc_GenMap(obj, depth) {
  return (($isArrayOf_sc_GenMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenMap;", depth))
}
function $is_sc_GenSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSeq)))
}
function $as_sc_GenSeq(obj) {
  return (($is_sc_GenSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSeq"))
}
function $isArrayOf_sc_GenSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSeq)))
}
function $asArrayOf_sc_GenSeq(obj, depth) {
  return (($isArrayOf_sc_GenSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSeq;", depth))
}
function $is_sc_GenSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSet)))
}
function $as_sc_GenSet(obj) {
  return (($is_sc_GenSet(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSet"))
}
function $isArrayOf_sc_GenSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSet)))
}
function $asArrayOf_sc_GenSet(obj, depth) {
  return (($isArrayOf_sc_GenSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSet;", depth))
}
function $is_sc_IndexedSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeqLike)))
}
function $as_sc_IndexedSeqLike(obj) {
  return (($is_sc_IndexedSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeqLike"))
}
function $isArrayOf_sc_IndexedSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeqLike)))
}
function $asArrayOf_sc_IndexedSeqLike(obj, depth) {
  return (($isArrayOf_sc_IndexedSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeqLike;", depth))
}
function $is_sc_LinearSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqLike)))
}
function $as_sc_LinearSeqLike(obj) {
  return (($is_sc_LinearSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqLike"))
}
function $isArrayOf_sc_LinearSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqLike)))
}
function $asArrayOf_sc_LinearSeqLike(obj, depth) {
  return (($isArrayOf_sc_LinearSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqLike;", depth))
}
function $is_sc_LinearSeqOptimized(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOptimized)))
}
function $as_sc_LinearSeqOptimized(obj) {
  return (($is_sc_LinearSeqOptimized(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOptimized"))
}
function $isArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOptimized)))
}
function $asArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOptimized(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOptimized;", depth))
}
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_sc_AbstractTraversable();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.iterator__sc_Iterator();
  $s_sc_Iterator$class__foreach__sc_Iterator__F1__V(this$1, f)
});
$c_sc_AbstractIterable.prototype.forall__F1__Z = (function(p) {
  var this$1 = this.iterator__sc_Iterator();
  return $s_sc_Iterator$class__forall__sc_Iterator__F1__Z(this$1, p)
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $s_sc_IterableLike$class__copyToArray__sc_IterableLike__O__I__I__V(this, xs, start, len)
});
$c_sc_AbstractIterable.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $s_sc_IterableLike$class__sameElements__sc_IterableLike__sc_GenIterable__Z(this, that)
});
$c_sc_AbstractIterable.prototype.toStream__sci_Stream = (function() {
  return this.iterator__sc_Iterator().toStream__sci_Stream()
});
function $is_scm_LinkedListLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_LinkedListLike)))
}
function $as_scm_LinkedListLike(obj) {
  return (($is_scm_LinkedListLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.LinkedListLike"))
}
function $isArrayOf_scm_LinkedListLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_LinkedListLike)))
}
function $asArrayOf_scm_LinkedListLike(obj, depth) {
  return (($isArrayOf_scm_LinkedListLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.LinkedListLike;", depth))
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
var $d_sci_Iterable = new $TypeData().initClass({
  sci_Iterable: 0
}, true, "scala.collection.immutable.Iterable", {
  sci_Iterable: 1,
  O: 1,
  sci_Traversable: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  s_Immutable: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1
});
/** @constructor */
function $c_scm_AbstractIterable() {
  /*<skip>*/
}
$c_scm_AbstractIterable.prototype = new $h_sc_AbstractIterable();
$c_scm_AbstractIterable.prototype.constructor = $c_scm_AbstractIterable;
/** @constructor */
function $h_scm_AbstractIterable() {
  /*<skip>*/
}
$h_scm_AbstractIterable.prototype = $c_scm_AbstractIterable.prototype;
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Set)))
}
function $as_sc_Set(obj) {
  return (($is_sc_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Set"))
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Set)))
}
function $asArrayOf_sc_Set(obj, depth) {
  return (($isArrayOf_sc_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Set;", depth))
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $s_sc_SeqLike$class__lengthCompare__sc_SeqLike__I__I(this, len)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $s_sc_SeqLike$class__isEmpty__sc_SeqLike__Z(this)
});
$c_sc_AbstractSeq.prototype.size__I = (function() {
  return this.length__I()
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $s_sc_TraversableLike$class__toString__sc_TraversableLike__T(this)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this.seq__sc_Seq())
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(that) {
  return $s_sc_GenSeqLike$class__equals__sc_GenSeqLike__O__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractMap() {
  /*<skip>*/
}
$c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractMap.prototype.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
  /*<skip>*/
}
$h_sc_AbstractMap.prototype = $c_sc_AbstractMap.prototype;
$c_sc_AbstractMap.prototype.isEmpty__Z = (function() {
  return $s_sc_MapLike$class__isEmpty__sc_MapLike__Z(this)
});
$c_sc_AbstractMap.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $s_sc_MapLike$class__addString__sc_MapLike__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractMap.prototype.stringPrefix__T = (function() {
  return "Map"
});
$c_sc_AbstractMap.prototype.toString__T = (function() {
  return $s_sc_TraversableLike$class__toString__sc_TraversableLike__T(this)
});
$c_sc_AbstractMap.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.unorderedHash__sc_TraversableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_mapSeed)
});
$c_sc_AbstractMap.prototype.equals__O__Z = (function(that) {
  return $s_sc_GenMapLike$class__equals__sc_GenMapLike__O__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractSet() {
  /*<skip>*/
}
$c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSet.prototype.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
  /*<skip>*/
}
$h_sc_AbstractSet.prototype = $c_sc_AbstractSet.prototype;
$c_sc_AbstractSet.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_SetBuilder(this.empty__sc_Set())
});
$c_sc_AbstractSet.prototype.isEmpty__Z = (function() {
  return $s_sc_SetLike$class__isEmpty__sc_SetLike__Z(this)
});
$c_sc_AbstractSet.prototype.stringPrefix__T = (function() {
  return "Set"
});
$c_sc_AbstractSet.prototype.toString__T = (function() {
  return $s_sc_TraversableLike$class__toString__sc_TraversableLike__T(this)
});
$c_sc_AbstractSet.prototype.subsetOf__sc_GenSet__Z = (function(that) {
  return this.forall__F1__Z(that)
});
$c_sc_AbstractSet.prototype.equals__O__Z = (function(that) {
  return $s_sc_GenSetLike$class__equals__sc_GenSetLike__O__Z(this, that)
});
$c_sc_AbstractSet.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.unorderedHash__sc_TraversableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
});
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
function $is_scm_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Seq)))
}
function $as_scm_Seq(obj) {
  return (($is_scm_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Seq"))
}
function $isArrayOf_scm_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Seq)))
}
function $asArrayOf_scm_Seq(obj, depth) {
  return (($isArrayOf_scm_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Seq;", depth))
}
/** @constructor */
function $c_sci_ListSet() {
  /*<skip>*/
}
$c_sci_ListSet.prototype = new $h_sc_AbstractSet();
$c_sci_ListSet.prototype.constructor = $c_sci_ListSet;
/** @constructor */
function $h_sci_ListSet() {
  /*<skip>*/
}
$h_sci_ListSet.prototype = $c_sci_ListSet.prototype;
$c_sci_ListSet.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_ListSet$()
});
$c_sci_ListSet.prototype.size__I = (function() {
  return 0
});
$c_sci_ListSet.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_ListSet.prototype.contains__O__Z = (function(elem) {
  return false
});
$c_sci_ListSet.prototype.$plus__O__sci_ListSet = (function(elem) {
  return new $c_sci_ListSet$Node(this, elem)
});
$c_sci_ListSet.prototype.scala$collection$immutable$ListSet$$unchecked_outer__sci_ListSet = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "Empty ListSet has no outer pointer")
});
$c_sci_ListSet.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_ListSet$$anon$1(this)
});
$c_sci_ListSet.prototype.head__O = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "Set has no elements")
});
$c_sci_ListSet.prototype.tail__sci_ListSet = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "Next of an empty set")
});
$c_sci_ListSet.prototype.stringPrefix__T = (function() {
  return "ListSet"
});
$c_sci_ListSet.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_ListSet.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_ListSet.prototype.empty__sc_Set = (function() {
  return $m_sci_ListSet$EmptyListSet$()
});
$c_sci_ListSet.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_ListSet.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_ListSet(elem)
});
function $as_sci_ListSet(obj) {
  return (((obj instanceof $c_sci_ListSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ListSet"))
}
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ListSet)))
}
function $asArrayOf_sci_ListSet(obj, depth) {
  return (($isArrayOf_sci_ListSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ListSet;", depth))
}
/** @constructor */
function $c_sci_Set$EmptySet$() {
  /*<skip>*/
}
$c_sci_Set$EmptySet$.prototype = new $h_sc_AbstractSet();
$c_sci_Set$EmptySet$.prototype.constructor = $c_sci_Set$EmptySet$;
/** @constructor */
function $h_sci_Set$EmptySet$() {
  /*<skip>*/
}
$h_sci_Set$EmptySet$.prototype = $c_sci_Set$EmptySet$.prototype;
$c_sci_Set$EmptySet$.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$EmptySet$.prototype.size__I = (function() {
  return 0
});
$c_sci_Set$EmptySet$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_Set$EmptySet$.prototype.foreach__F1__V = (function(f) {
  /*<skip>*/
});
$c_sci_Set$EmptySet$.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$EmptySet$.prototype.apply__O__O = (function(v1) {
  return false
});
$c_sci_Set$EmptySet$.prototype.empty__sc_Set = (function() {
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$EmptySet$.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$EmptySet$.prototype.$plus__O__sc_Set = (function(elem) {
  return new $c_sci_Set$Set1(elem)
});
var $d_sci_Set$EmptySet$ = new $TypeData().initClass({
  sci_Set$EmptySet$: 0
}, false, "scala.collection.immutable.Set$EmptySet$", {
  sci_Set$EmptySet$: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$EmptySet$.prototype.$classData = $d_sci_Set$EmptySet$;
var $n_sci_Set$EmptySet$;
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$()
  };
  return $n_sci_Set$EmptySet$
}
/** @constructor */
function $c_sci_Set$Set1(elem1) {
  this.sci_Set$Set1__f_elem1 = null;
  this.sci_Set$Set1__f_elem1 = elem1
}
$c_sci_Set$Set1.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set1.prototype.constructor = $c_sci_Set$Set1;
/** @constructor */
function $h_sci_Set$Set1() {
  /*<skip>*/
}
$h_sci_Set$Set1.prototype = $c_sci_Set$Set1.prototype;
$c_sci_Set$Set1.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set1.prototype.size__I = (function() {
  return 1
});
$c_sci_Set$Set1.prototype.contains__O__Z = (function(elem) {
  return $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1)
});
$c_sci_Set$Set1.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set2(this.sci_Set$Set1__f_elem1, elem))
});
$c_sci_Set$Set1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.sci_Set$Set1__f_elem1];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
});
$c_sci_Set$Set1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set1__f_elem1)
});
$c_sci_Set$Set1.prototype.forall__F1__Z = (function(p) {
  return $uZ(p.apply__O__O(this.sci_Set$Set1__f_elem1))
});
$c_sci_Set$Set1.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$Set1.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set1.prototype.empty__sc_Set = (function() {
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set1.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set1.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
var $d_sci_Set$Set1 = new $TypeData().initClass({
  sci_Set$Set1: 0
}, false, "scala.collection.immutable.Set$Set1", {
  sci_Set$Set1: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set1.prototype.$classData = $d_sci_Set$Set1;
/** @constructor */
function $c_sci_Set$Set2(elem1, elem2) {
  this.sci_Set$Set2__f_elem1 = null;
  this.sci_Set$Set2__f_elem2 = null;
  this.sci_Set$Set2__f_elem1 = elem1;
  this.sci_Set$Set2__f_elem2 = elem2
}
$c_sci_Set$Set2.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set2.prototype.constructor = $c_sci_Set$Set2;
/** @constructor */
function $h_sci_Set$Set2() {
  /*<skip>*/
}
$h_sci_Set$Set2.prototype = $c_sci_Set$Set2.prototype;
$c_sci_Set$Set2.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set2.prototype.size__I = (function() {
  return 2
});
$c_sci_Set$Set2.prototype.contains__O__Z = (function(elem) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2))
});
$c_sci_Set$Set2.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set3(this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2, elem))
});
$c_sci_Set$Set2.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
});
$c_sci_Set$Set2.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set2__f_elem1);
  f.apply__O__O(this.sci_Set$Set2__f_elem2)
});
$c_sci_Set$Set2.prototype.forall__F1__Z = (function(p) {
  return ($uZ(p.apply__O__O(this.sci_Set$Set2__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set2__f_elem2)))
});
$c_sci_Set$Set2.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$Set2.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set2.prototype.empty__sc_Set = (function() {
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set2.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set2.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
var $d_sci_Set$Set2 = new $TypeData().initClass({
  sci_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", {
  sci_Set$Set2: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2.prototype.$classData = $d_sci_Set$Set2;
/** @constructor */
function $c_sci_Set$Set3(elem1, elem2, elem3) {
  this.sci_Set$Set3__f_elem1 = null;
  this.sci_Set$Set3__f_elem2 = null;
  this.sci_Set$Set3__f_elem3 = null;
  this.sci_Set$Set3__f_elem1 = elem1;
  this.sci_Set$Set3__f_elem2 = elem2;
  this.sci_Set$Set3__f_elem3 = elem3
}
$c_sci_Set$Set3.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set3.prototype.constructor = $c_sci_Set$Set3;
/** @constructor */
function $h_sci_Set$Set3() {
  /*<skip>*/
}
$h_sci_Set$Set3.prototype = $c_sci_Set$Set3.prototype;
$c_sci_Set$Set3.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set3.prototype.size__I = (function() {
  return 3
});
$c_sci_Set$Set3.prototype.contains__O__Z = (function(elem) {
  return (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3))
});
$c_sci_Set$Set3.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set4(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3, elem))
});
$c_sci_Set$Set3.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
});
$c_sci_Set$Set3.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set3__f_elem1);
  f.apply__O__O(this.sci_Set$Set3__f_elem2);
  f.apply__O__O(this.sci_Set$Set3__f_elem3)
});
$c_sci_Set$Set3.prototype.forall__F1__Z = (function(p) {
  return (($uZ(p.apply__O__O(this.sci_Set$Set3__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem3)))
});
$c_sci_Set$Set3.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$Set3.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set3.prototype.empty__sc_Set = (function() {
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set3.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set3.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
var $d_sci_Set$Set3 = new $TypeData().initClass({
  sci_Set$Set3: 0
}, false, "scala.collection.immutable.Set$Set3", {
  sci_Set$Set3: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3.prototype.$classData = $d_sci_Set$Set3;
/** @constructor */
function $c_sci_Set$Set4(elem1, elem2, elem3, elem4) {
  this.sci_Set$Set4__f_elem1 = null;
  this.sci_Set$Set4__f_elem2 = null;
  this.sci_Set$Set4__f_elem3 = null;
  this.sci_Set$Set4__f_elem4 = null;
  this.sci_Set$Set4__f_elem1 = elem1;
  this.sci_Set$Set4__f_elem2 = elem2;
  this.sci_Set$Set4__f_elem3 = elem3;
  this.sci_Set$Set4__f_elem4 = elem4
}
$c_sci_Set$Set4.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set4.prototype.constructor = $c_sci_Set$Set4;
/** @constructor */
function $h_sci_Set$Set4() {
  /*<skip>*/
}
$h_sci_Set$Set4.prototype = $c_sci_Set$Set4.prototype;
$c_sci_Set$Set4.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set4.prototype.size__I = (function() {
  return 4
});
$c_sci_Set$Set4.prototype.contains__O__Z = (function(elem) {
  return ((($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4))
});
$c_sci_Set$Set4.prototype.$plus__O__sci_Set = (function(elem) {
  if (this.contains__O__Z(elem)) {
    return this
  } else {
    var this$3 = $ct_sci_HashSet__(new $c_sci_HashSet());
    var elem1 = this.sci_Set$Set4__f_elem1;
    var elem2 = this.sci_Set$Set4__f_elem2;
    var array = [this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4, elem];
    var this$4 = this$3.$plus__O__sci_HashSet(elem1).$plus__O__sci_HashSet(elem2);
    var start = 0;
    var end = $uI(array.length);
    var z = this$4;
    var $$x1;
    while (true) {
      if ((start !== end)) {
        var temp$start = ((1 + start) | 0);
        var arg1 = z;
        var index = start;
        var arg2 = array[index];
        var x$2 = $as_sc_Set(arg1);
        var temp$z = x$2.$plus__O__sc_Set(arg2);
        start = temp$start;
        z = temp$z;
        continue
      };
      var $$x1 = z;
      break
    };
    return $as_sci_HashSet($as_sc_Set($$x1))
  }
});
$c_sci_Set$Set4.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.sci_Set$Set4__f_elem1, this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
});
$c_sci_Set$Set4.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set4__f_elem1);
  f.apply__O__O(this.sci_Set$Set4__f_elem2);
  f.apply__O__O(this.sci_Set$Set4__f_elem3);
  f.apply__O__O(this.sci_Set$Set4__f_elem4)
});
$c_sci_Set$Set4.prototype.forall__F1__Z = (function(p) {
  return ((($uZ(p.apply__O__O(this.sci_Set$Set4__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem3))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem4)))
});
$c_sci_Set$Set4.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$Set4.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set4.prototype.empty__sc_Set = (function() {
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set4.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set4.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
var $d_sci_Set$Set4 = new $TypeData().initClass({
  sci_Set$Set4: 0
}, false, "scala.collection.immutable.Set$Set4", {
  sci_Set$Set4: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4.prototype.$classData = $d_sci_Set$Set4;
function $ct_sci_HashSet__($thiz) {
  return $thiz
}
/** @constructor */
function $c_sci_HashSet() {
  /*<skip>*/
}
$c_sci_HashSet.prototype = new $h_sc_AbstractSet();
$c_sci_HashSet.prototype.constructor = $c_sci_HashSet;
/** @constructor */
function $h_sci_HashSet() {
  /*<skip>*/
}
$h_sci_HashSet.prototype = $c_sci_HashSet.prototype;
$c_sci_HashSet.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_HashSet$()
});
$c_sci_HashSet.prototype.size__I = (function() {
  return 0
});
$c_sci_HashSet.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_HashSet.prototype.foreach__F1__V = (function(f) {
  /*<skip>*/
});
$c_sci_HashSet.prototype.contains__O__Z = (function(e) {
  return this.get0__O__I__I__Z(e, this.computeHash__O__I(e), 0)
});
$c_sci_HashSet.prototype.subsetOf__sc_GenSet__Z = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    var x2 = $as_sci_HashSet(that);
    return this.subsetOf0__sci_HashSet__I__Z(x2, 0)
  } else {
    var this$1 = this.iterator__sc_Iterator();
    return $s_sc_Iterator$class__forall__sc_Iterator__F1__Z(this$1, that)
  }
});
$c_sci_HashSet.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  return true
});
$c_sci_HashSet.prototype.$plus__O__sci_HashSet = (function(e) {
  return this.updated0__O__I__I__sci_HashSet(e, this.computeHash__O__I(e), 0)
});
$c_sci_HashSet.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
});
$c_sci_HashSet.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I($m_sr_ScalaRunTime$().hash__O__I(key))
});
$c_sci_HashSet.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return false
});
$c_sci_HashSet.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  return new $c_sci_HashSet$HashSet1(key, hash)
});
$c_sci_HashSet.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_HashSet.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_HashSet.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_HashSet.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_HashSet(elem)
});
$c_sci_HashSet.prototype.empty__sc_Set = (function() {
  return $m_sci_HashSet$EmptyHashSet$()
});
function $as_sci_HashSet(obj) {
  return (((obj instanceof $c_sci_HashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet"))
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet)))
}
function $asArrayOf_sci_HashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth))
}
var $d_sci_HashSet = new $TypeData().initClass({
  sci_HashSet: 0
}, false, "scala.collection.immutable.HashSet", {
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet.prototype.$classData = $d_sci_HashSet;
/** @constructor */
function $c_sci_ListSet$EmptyListSet$() {
  /*<skip>*/
}
$c_sci_ListSet$EmptyListSet$.prototype = new $h_sci_ListSet();
$c_sci_ListSet$EmptyListSet$.prototype.constructor = $c_sci_ListSet$EmptyListSet$;
/** @constructor */
function $h_sci_ListSet$EmptyListSet$() {
  /*<skip>*/
}
$h_sci_ListSet$EmptyListSet$.prototype = $c_sci_ListSet$EmptyListSet$.prototype;
var $d_sci_ListSet$EmptyListSet$ = new $TypeData().initClass({
  sci_ListSet$EmptyListSet$: 0
}, false, "scala.collection.immutable.ListSet$EmptyListSet$", {
  sci_ListSet$EmptyListSet$: 1,
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$EmptyListSet$.prototype.$classData = $d_sci_ListSet$EmptyListSet$;
var $n_sci_ListSet$EmptyListSet$;
function $m_sci_ListSet$EmptyListSet$() {
  if ((!$n_sci_ListSet$EmptyListSet$)) {
    $n_sci_ListSet$EmptyListSet$ = new $c_sci_ListSet$EmptyListSet$()
  };
  return $n_sci_ListSet$EmptyListSet$
}
function $p_sci_ListSet$Node__sizeInternal__sci_ListSet__I__I($thiz, n, acc) {
  while (true) {
    if (n.isEmpty__Z()) {
      return acc
    } else {
      var temp$n = n.scala$collection$immutable$ListSet$$unchecked_outer__sci_ListSet();
      var temp$acc = ((1 + acc) | 0);
      n = temp$n;
      acc = temp$acc
    }
  }
}
function $p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z($thiz, n, e) {
  while (true) {
    if ((!n.isEmpty__Z())) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(n.head__O(), e)) {
        return true
      } else {
        n = n.scala$collection$immutable$ListSet$$unchecked_outer__sci_ListSet()
      }
    } else {
      return false
    }
  }
}
/** @constructor */
function $c_sci_ListSet$Node(outer, head) {
  this.sci_ListSet$Node__f_head = null;
  this.sci_ListSet$Node__f_$outer = null;
  this.sci_ListSet$Node__f_head = head;
  if ((outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sci_ListSet$Node__f_$outer = outer
  }
}
$c_sci_ListSet$Node.prototype = new $h_sci_ListSet();
$c_sci_ListSet$Node.prototype.constructor = $c_sci_ListSet$Node;
/** @constructor */
function $h_sci_ListSet$Node() {
  /*<skip>*/
}
$h_sci_ListSet$Node.prototype = $c_sci_ListSet$Node.prototype;
$c_sci_ListSet$Node.prototype.head__O = (function() {
  return this.sci_ListSet$Node__f_head
});
$c_sci_ListSet$Node.prototype.scala$collection$immutable$ListSet$$unchecked_outer__sci_ListSet = (function() {
  return this.sci_ListSet$Node__f_$outer
});
$c_sci_ListSet$Node.prototype.size__I = (function() {
  return $p_sci_ListSet$Node__sizeInternal__sci_ListSet__I__I(this, this, 0)
});
$c_sci_ListSet$Node.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_ListSet$Node.prototype.contains__O__Z = (function(e) {
  return $p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z(this, this, e)
});
$c_sci_ListSet$Node.prototype.$plus__O__sci_ListSet = (function(e) {
  return ($p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z(this, this, e) ? this : new $c_sci_ListSet$Node(this, e))
});
$c_sci_ListSet$Node.prototype.tail__sci_ListSet = (function() {
  return this.sci_ListSet$Node__f_$outer
});
$c_sci_ListSet$Node.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_ListSet(elem)
});
var $d_sci_ListSet$Node = new $TypeData().initClass({
  sci_ListSet$Node: 0
}, false, "scala.collection.immutable.ListSet$Node", {
  sci_ListSet$Node: 1,
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$Node.prototype.$classData = $d_sci_ListSet$Node;
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
$c_scm_AbstractSeq.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_AbstractSeq.prototype.seq__sc_TraversableOnce = (function() {
  return this.seq__scm_Seq()
});
/** @constructor */
function $c_sci_HashSet$EmptyHashSet$() {
  /*<skip>*/
}
$c_sci_HashSet$EmptyHashSet$.prototype = new $h_sci_HashSet();
$c_sci_HashSet$EmptyHashSet$.prototype.constructor = $c_sci_HashSet$EmptyHashSet$;
/** @constructor */
function $h_sci_HashSet$EmptyHashSet$() {
  /*<skip>*/
}
$h_sci_HashSet$EmptyHashSet$.prototype = $c_sci_HashSet$EmptyHashSet$.prototype;
var $d_sci_HashSet$EmptyHashSet$ = new $TypeData().initClass({
  sci_HashSet$EmptyHashSet$: 0
}, false, "scala.collection.immutable.HashSet$EmptyHashSet$", {
  sci_HashSet$EmptyHashSet$: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$EmptyHashSet$.prototype.$classData = $d_sci_HashSet$EmptyHashSet$;
var $n_sci_HashSet$EmptyHashSet$;
function $m_sci_HashSet$EmptyHashSet$() {
  if ((!$n_sci_HashSet$EmptyHashSet$)) {
    $n_sci_HashSet$EmptyHashSet$ = new $c_sci_HashSet$EmptyHashSet$()
  };
  return $n_sci_HashSet$EmptyHashSet$
}
/** @constructor */
function $c_sci_HashSet$HashTrieSet(bitmap, elems, size0) {
  this.sci_HashSet$HashTrieSet__f_bitmap = 0;
  this.sci_HashSet$HashTrieSet__f_elems = null;
  this.sci_HashSet$HashTrieSet__f_size0 = 0;
  this.sci_HashSet$HashTrieSet__f_bitmap = bitmap;
  this.sci_HashSet$HashTrieSet__f_elems = elems;
  this.sci_HashSet$HashTrieSet__f_size0 = size0;
  $m_s_Predef$().assert__Z__V(($m_jl_Integer$().bitCount__I__I(bitmap) === elems.u.length))
}
$c_sci_HashSet$HashTrieSet.prototype = new $h_sci_HashSet();
$c_sci_HashSet$HashTrieSet.prototype.constructor = $c_sci_HashSet$HashTrieSet;
/** @constructor */
function $h_sci_HashSet$HashTrieSet() {
  /*<skip>*/
}
$h_sci_HashSet$HashTrieSet.prototype = $c_sci_HashSet$HashTrieSet.prototype;
$c_sci_HashSet$HashTrieSet.prototype.size__I = (function() {
  return this.sci_HashSet$HashTrieSet__f_size0
});
$c_sci_HashSet$HashTrieSet.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  if ((this.sci_HashSet$HashTrieSet__f_bitmap === (-1))) {
    return this.sci_HashSet$HashTrieSet__f_elems.get((31 & index)).get0__O__I__I__Z(key, hash, ((5 + level) | 0))
  } else if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
    var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
    var offset = $m_jl_Integer$().bitCount__I__I(i);
    return this.sci_HashSet$HashTrieSet__f_elems.get(offset).get0__O__I__I__Z(key, hash, ((5 + level) | 0))
  } else {
    return false
  }
});
$c_sci_HashSet$HashTrieSet.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
  var offset = $m_jl_Integer$().bitCount__I__I(i);
  if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
    var sub = this.sci_HashSet$HashTrieSet__f_elems.get(offset);
    var subNew = sub.updated0__O__I__I__sci_HashSet(key, hash, ((5 + level) | 0));
    if ((sub === subNew)) {
      return this
    } else {
      var elemsNew = new ($d_sci_HashSet.getArrayOf().constr)(this.sci_HashSet$HashTrieSet__f_elems.u.length);
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_HashSet$HashTrieSet__f_elems, 0, elemsNew, 0, this.sci_HashSet$HashTrieSet__f_elems.u.length);
      elemsNew.set(offset, subNew);
      return new $c_sci_HashSet$HashTrieSet(this.sci_HashSet$HashTrieSet__f_bitmap, elemsNew, ((this.sci_HashSet$HashTrieSet__f_size0 + ((subNew.size__I() - sub.size__I()) | 0)) | 0))
    }
  } else {
    var elemsNew$2 = new ($d_sci_HashSet.getArrayOf().constr)(((1 + this.sci_HashSet$HashTrieSet__f_elems.u.length) | 0));
    $m_s_Array$().copy__O__I__O__I__I__V(this.sci_HashSet$HashTrieSet__f_elems, 0, elemsNew$2, 0, offset);
    elemsNew$2.set(offset, new $c_sci_HashSet$HashSet1(key, hash));
    $m_s_Array$().copy__O__I__O__I__I__V(this.sci_HashSet$HashTrieSet__f_elems, offset, elemsNew$2, ((1 + offset) | 0), ((this.sci_HashSet$HashTrieSet__f_elems.u.length - offset) | 0));
    var bitmapNew = (this.sci_HashSet$HashTrieSet__f_bitmap | mask);
    return new $c_sci_HashSet$HashTrieSet(bitmapNew, elemsNew$2, ((1 + this.sci_HashSet$HashTrieSet__f_size0) | 0))
  }
});
$c_sci_HashSet$HashTrieSet.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  if ((that === this)) {
    return true
  } else {
    if ((that instanceof $c_sci_HashSet$HashTrieSet)) {
      var x2 = $as_sci_HashSet$HashTrieSet(that);
      if ((this.sci_HashSet$HashTrieSet__f_size0 <= x2.sci_HashSet$HashTrieSet__f_size0)) {
        var abm = this.sci_HashSet$HashTrieSet__f_bitmap;
        var a = this.sci_HashSet$HashTrieSet__f_elems;
        var ai = 0;
        var b = x2.sci_HashSet$HashTrieSet__f_elems;
        var bbm = x2.sci_HashSet$HashTrieSet__f_bitmap;
        var bi = 0;
        if (((abm & bbm) === abm)) {
          while ((abm !== 0)) {
            var alsb = (abm ^ (abm & (((-1) + abm) | 0)));
            var blsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
            if ((alsb === blsb)) {
              if ((!a.get(ai).subsetOf0__sci_HashSet__I__Z(b.get(bi), ((5 + level) | 0)))) {
                return false
              };
              abm = (abm & (~alsb));
              ai = ((1 + ai) | 0)
            };
            bbm = (bbm & (~blsb));
            bi = ((1 + bi) | 0)
          };
          return true
        } else {
          return false
        }
      }
    };
    return false
  }
});
$c_sci_HashSet$HashTrieSet.prototype.foreach__F1__V = (function(f) {
  var i = 0;
  while ((i < this.sci_HashSet$HashTrieSet__f_elems.u.length)) {
    this.sci_HashSet$HashTrieSet__f_elems.get(i).foreach__F1__V(f);
    i = ((1 + i) | 0)
  }
});
$c_sci_HashSet$HashTrieSet.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_HashSet$HashTrieSet$$anon$1(this)
});
function $as_sci_HashSet$HashTrieSet(obj) {
  return (((obj instanceof $c_sci_HashSet$HashTrieSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashTrieSet"))
}
function $isArrayOf_sci_HashSet$HashTrieSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashTrieSet)))
}
function $asArrayOf_sci_HashSet$HashTrieSet(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashTrieSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashTrieSet;", depth))
}
var $d_sci_HashSet$HashTrieSet = new $TypeData().initClass({
  sci_HashSet$HashTrieSet: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet", {
  sci_HashSet$HashTrieSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashTrieSet.prototype.$classData = $d_sci_HashSet$HashTrieSet;
/** @constructor */
function $c_sci_HashSet$LeafHashSet() {
  /*<skip>*/
}
$c_sci_HashSet$LeafHashSet.prototype = new $h_sci_HashSet();
$c_sci_HashSet$LeafHashSet.prototype.constructor = $c_sci_HashSet$LeafHashSet;
/** @constructor */
function $h_sci_HashSet$LeafHashSet() {
  /*<skip>*/
}
$h_sci_HashSet$LeafHashSet.prototype = $c_sci_HashSet$LeafHashSet.prototype;
/** @constructor */
function $c_sci_HashSet$HashSet1(key, hash) {
  this.sci_HashSet$HashSet1__f_key = null;
  this.sci_HashSet$HashSet1__f_hash = 0;
  this.sci_HashSet$HashSet1__f_key = key;
  this.sci_HashSet$HashSet1__f_hash = hash
}
$c_sci_HashSet$HashSet1.prototype = new $h_sci_HashSet$LeafHashSet();
$c_sci_HashSet$HashSet1.prototype.constructor = $c_sci_HashSet$HashSet1;
/** @constructor */
function $h_sci_HashSet$HashSet1() {
  /*<skip>*/
}
$h_sci_HashSet$HashSet1.prototype = $c_sci_HashSet$HashSet1.prototype;
$c_sci_HashSet$HashSet1.prototype.size__I = (function() {
  return 1
});
$c_sci_HashSet$HashSet1.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return ((hash === this.sci_HashSet$HashSet1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key))
});
$c_sci_HashSet$HashSet1.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  return that.get0__O__I__I__Z(this.sci_HashSet$HashSet1__f_key, this.sci_HashSet$HashSet1__f_hash, level)
});
$c_sci_HashSet$HashSet1.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  if (((hash === this.sci_HashSet$HashSet1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key))) {
    return this
  } else if ((hash !== this.sci_HashSet$HashSet1__f_hash)) {
    return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__sci_HashSet$HashTrieSet(this.sci_HashSet$HashSet1__f_hash, this, hash, new $c_sci_HashSet$HashSet1(key, hash), level)
  } else {
    var this$2 = $m_sci_ListSet$EmptyListSet$();
    var elem = this.sci_HashSet$HashSet1__f_key;
    return new $c_sci_HashSet$HashSetCollision1(hash, new $c_sci_ListSet$Node(this$2, elem).$plus__O__sci_ListSet(key))
  }
});
$c_sci_HashSet$HashSet1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.sci_HashSet$HashSet1__f_key];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return new $c_sc_IndexedSeqLike$Elements(elems, 0, $uI(elems.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
});
$c_sci_HashSet$HashSet1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_HashSet$HashSet1__f_key)
});
function $as_sci_HashSet$HashSet1(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSet1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSet1"))
}
function $isArrayOf_sci_HashSet$HashSet1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSet1)))
}
function $asArrayOf_sci_HashSet$HashSet1(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSet1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSet1;", depth))
}
var $d_sci_HashSet$HashSet1 = new $TypeData().initClass({
  sci_HashSet$HashSet1: 0
}, false, "scala.collection.immutable.HashSet$HashSet1", {
  sci_HashSet$HashSet1: 1,
  sci_HashSet$LeafHashSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashSet1.prototype.$classData = $d_sci_HashSet$HashSet1;
/** @constructor */
function $c_sci_HashSet$HashSetCollision1(hash, ks) {
  this.sci_HashSet$HashSetCollision1__f_hash = 0;
  this.sci_HashSet$HashSetCollision1__f_ks = null;
  this.sci_HashSet$HashSetCollision1__f_hash = hash;
  this.sci_HashSet$HashSetCollision1__f_ks = ks
}
$c_sci_HashSet$HashSetCollision1.prototype = new $h_sci_HashSet$LeafHashSet();
$c_sci_HashSet$HashSetCollision1.prototype.constructor = $c_sci_HashSet$HashSetCollision1;
/** @constructor */
function $h_sci_HashSet$HashSetCollision1() {
  /*<skip>*/
}
$h_sci_HashSet$HashSetCollision1.prototype = $c_sci_HashSet$HashSetCollision1.prototype;
$c_sci_HashSet$HashSetCollision1.prototype.size__I = (function() {
  return this.sci_HashSet$HashSetCollision1__f_ks.size__I()
});
$c_sci_HashSet$HashSetCollision1.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return ((hash === this.sci_HashSet$HashSetCollision1__f_hash) && this.sci_HashSet$HashSetCollision1__f_ks.contains__O__Z(key))
});
$c_sci_HashSet$HashSetCollision1.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
  var this$2 = new $c_sci_ListSet$$anon$1(this$1);
  var res = true;
  while (true) {
    if (res) {
      var this$3 = this$2.sci_ListSet$$anon$1__f_that;
      var $$x1 = (!this$3.isEmpty__Z())
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var arg1 = this$2.next__O();
      res = that.get0__O__I__I__Z(arg1, this.sci_HashSet$HashSetCollision1__f_hash, level)
    } else {
      break
    }
  };
  return res
});
$c_sci_HashSet$HashSetCollision1.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  return ((hash === this.sci_HashSet$HashSetCollision1__f_hash) ? new $c_sci_HashSet$HashSetCollision1(hash, this.sci_HashSet$HashSetCollision1__f_ks.$plus__O__sci_ListSet(key)) : $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__sci_HashSet$HashTrieSet(this.sci_HashSet$HashSetCollision1__f_hash, this, hash, new $c_sci_HashSet$HashSet1(key, hash), level))
});
$c_sci_HashSet$HashSetCollision1.prototype.iterator__sc_Iterator = (function() {
  var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
  return new $c_sci_ListSet$$anon$1(this$1)
});
$c_sci_HashSet$HashSetCollision1.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
  var this$2 = new $c_sci_ListSet$$anon$1(this$1);
  $s_sc_Iterator$class__foreach__sc_Iterator__F1__V(this$2, f)
});
var $d_sci_HashSet$HashSetCollision1 = new $TypeData().initClass({
  sci_HashSet$HashSetCollision1: 0
}, false, "scala.collection.immutable.HashSet$HashSetCollision1", {
  sci_HashSet$HashSetCollision1: 1,
  sci_HashSet$LeafHashSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashSetCollision1.prototype.$classData = $d_sci_HashSet$HashSetCollision1;
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sc_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.length__I = (function() {
  return $s_sc_LinearSeqOptimized$class__length__sc_LinearSeqOptimized__I(this)
});
$c_sci_List.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $s_sc_LinearSeqOptimized$class__sameElements__sc_LinearSeqOptimized__sc_GenIterable__Z(this, that)
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return $s_sc_LinearSeqOptimized$class__lengthCompare__sc_LinearSeqOptimized__I__I(this, len)
});
$c_sci_List.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_LinearSeqLike$$anon$1(this)
});
$c_sci_List.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_List$()
});
$c_sci_List.prototype.drop__I__sci_List = (function(n) {
  var these = this;
  var count = n;
  while (((!these.isEmpty__Z()) && (count > 0))) {
    var this$1 = these;
    these = this$1.tail__sci_List();
    count = (((-1) + count) | 0)
  };
  return these
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    var this$1 = these;
    these = this$1.tail__sci_List()
  }
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "List"
});
$c_sci_List.prototype.toStream__sci_Stream = (function() {
  return (this.isEmpty__Z() ? $m_sci_Stream$Empty$() : new $c_sci_Stream$Cons(this.head__O(), new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.tail__sci_List().toStream__sci_Stream()))(this))))
});
$c_sci_List.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_List.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_List.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $s_sc_LinearSeqOptimized$class__apply__sc_LinearSeqOptimized__I__O(this, n)
});
$c_sci_List.prototype.drop__I__sc_LinearSeqOptimized = (function(n) {
  return this.drop__I__sci_List(n)
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
function $p_sci_Range__gap__J($thiz) {
  var value = $thiz.sci_Range__f_end;
  var hi = (value >> 31);
  var value$1 = $thiz.sci_Range__f_start;
  var hi$1 = (value$1 >> 31);
  var lo = ((value - value$1) | 0);
  var hi$2 = ((((-2147483648) ^ lo) > ((-2147483648) ^ value)) ? (((-1) + ((hi - hi$1) | 0)) | 0) : ((hi - hi$1) | 0));
  return new $c_RTLong(lo, hi$2)
}
function $p_sci_Range__isExact__Z($thiz) {
  var this$2 = $p_sci_Range__gap__J($thiz);
  var value = $thiz.sci_Range__f_step;
  var hi = (value >> 31);
  var this$3 = $m_RTLong$();
  var lo = this$3.remainderImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return ((lo === 0) && (hi$1 === 0))
}
function $p_sci_Range__hasStub__Z($thiz) {
  return ($thiz.isInclusive__Z() || (!$p_sci_Range__isExact__Z($thiz)))
}
function $p_sci_Range__longLength__J($thiz) {
  var this$2 = $p_sci_Range__gap__J($thiz);
  var value = $thiz.sci_Range__f_step;
  var hi = (value >> 31);
  var this$3 = $m_RTLong$();
  var lo = this$3.divideImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var value$1 = ($p_sci_Range__hasStub__Z($thiz) ? 1 : 0);
  var hi$2 = (value$1 >> 31);
  var lo$1 = ((lo + value$1) | 0);
  var hi$3 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ lo)) ? ((1 + ((hi$1 + hi$2) | 0)) | 0) : ((hi$1 + hi$2) | 0));
  return new $c_RTLong(lo$1, hi$3)
}
function $p_sci_Range__locationAfterN__I__I($thiz, n) {
  return (($thiz.sci_Range__f_start + Math.imul($thiz.sci_Range__f_step, n)) | 0)
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.sci_Range__f_start = start;
  $thiz.sci_Range__f_end = end;
  $thiz.sci_Range__f_step = step;
  $thiz.sci_Range__f_isEmpty = ((((start > end) && (step > 0)) || ((start < end) && (step < 0))) || ((start === end) && (!$thiz.isInclusive__Z())));
  if ((step === 0)) {
    var $$x1;
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.")
  } else if ($thiz.sci_Range__f_isEmpty) {
    var $$x1 = 0
  } else {
    var t = $p_sci_Range__longLength__J($thiz);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var $$x1 = (((hi === 0) ? (((-2147483648) ^ lo) > (-1)) : (hi > 0)) ? (-1) : lo)
  };
  $thiz.sci_Range__f_numRangeElements = $$x1;
  if ($thiz.sci_Range__f_isEmpty) {
    var $$x2 = ((start - step) | 0)
  } else {
    switch (step) {
      case 1: {
        var $$x2 = ($thiz.isInclusive__Z() ? end : (((-1) + end) | 0));
        break
      }
      case (-1): {
        var $$x2 = ($thiz.isInclusive__Z() ? end : ((1 + end) | 0));
        break
      }
      default: {
        var this$2 = $p_sci_Range__gap__J($thiz);
        var hi$1 = (step >> 31);
        var this$3 = $m_RTLong$();
        var lo$1 = this$3.remainderImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, step, hi$1);
        var $$x2 = ((lo$1 !== 0) ? ((end - lo$1) | 0) : ($thiz.isInclusive__Z() ? end : ((end - step) | 0)))
      }
    }
  };
  $thiz.sci_Range__f_lastElement = $$x2;
  $thiz.sci_Range__f_terminalElement = (($thiz.sci_Range__f_lastElement + step) | 0);
  return $thiz
}
/** @constructor */
function $c_sci_Range() {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_numRangeElements = 0;
  this.sci_Range__f_lastElement = 0;
  this.sci_Range__f_terminalElement = 0
}
$c_sci_Range.prototype = new $h_sc_AbstractSeq();
$c_sci_Range.prototype.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
  /*<skip>*/
}
$h_sci_Range.prototype = $c_sci_Range.prototype;
$c_sci_Range.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_IndexedSeq$()
});
$c_sci_Range.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Range.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqLike$Elements(this, 0, this.length__I())
});
$c_sci_Range.prototype.isEmpty__Z = (function() {
  return this.sci_Range__f_isEmpty
});
$c_sci_Range.prototype.last__I = (function() {
  if (this.sci_Range__f_isEmpty) {
    var this$1 = $m_sci_Nil$();
    return $uI($s_sc_LinearSeqOptimized$class__last__sc_LinearSeqOptimized__O(this$1))
  } else {
    return this.sci_Range__f_lastElement
  }
});
$c_sci_Range.prototype.isInclusive__Z = (function() {
  return false
});
$c_sci_Range.prototype.size__I = (function() {
  return this.length__I()
});
$c_sci_Range.prototype.length__I = (function() {
  return ((this.sci_Range__f_numRangeElements < 0) ? $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, this.isInclusive__Z()) : this.sci_Range__f_numRangeElements)
});
$c_sci_Range.prototype.scala$collection$immutable$Range$$validateMaxLength__V = (function() {
  if ((this.sci_Range__f_numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, this.isInclusive__Z())
  }
});
$c_sci_Range.prototype.foreach__F1__V = (function(f) {
  if ((!this.sci_Range__f_isEmpty)) {
    var i = this.sci_Range__f_start;
    while (true) {
      f.apply__O__O(i);
      if ((i === this.sci_Range__f_lastElement)) {
        return (void 0)
      };
      i = ((i + this.sci_Range__f_step) | 0)
    }
  }
});
$c_sci_Range.prototype.take__I__sci_Range = (function(n) {
  if (((n <= 0) || this.sci_Range__f_isEmpty)) {
    var value = this.sci_Range__f_start;
    return $ct_sci_Range__I__I__I__(new $c_sci_Range(), value, value, this.sci_Range__f_step)
  } else {
    return (((n >= this.sci_Range__f_numRangeElements) && (this.sci_Range__f_numRangeElements >= 0)) ? this : new $c_sci_Range$Inclusive(this.sci_Range__f_start, $p_sci_Range__locationAfterN__I__I(this, (((-1) + n) | 0)), this.sci_Range__f_step))
  }
});
$c_sci_Range.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    var x2 = $as_sci_Range(other);
    if (this.sci_Range__f_isEmpty) {
      return x2.sci_Range__f_isEmpty
    } else if (((!x2.sci_Range__f_isEmpty) && (this.sci_Range__f_start === x2.sci_Range__f_start))) {
      var l0 = this.last__I();
      return ((l0 === x2.last__I()) && ((this.sci_Range__f_start === l0) || (this.sci_Range__f_step === x2.sci_Range__f_step)))
    } else {
      return false
    }
  } else {
    return $s_sc_GenSeqLike$class__equals__sc_GenSeqLike__O__Z(this, other)
  }
});
$c_sci_Range.prototype.toString__T = (function() {
  var endStr = (((this.sci_Range__f_numRangeElements > $m_sci_Range$().sci_Range$__f_MAX_PRINT) || ((!this.sci_Range__f_isEmpty) && (this.sci_Range__f_numRangeElements < 0))) ? ", ... )" : ")");
  var this$1 = this.take__I__sci_Range($m_sci_Range$().sci_Range$__f_MAX_PRINT);
  return $s_sc_TraversableOnce$class__mkString__sc_TraversableOnce__T__T__T__T(this$1, "Range(", ", ", endStr)
});
$c_sci_Range.prototype.apply$mcII$sp__I__I = (function(idx) {
  this.scala$collection$immutable$Range$$validateMaxLength__V();
  if (((idx < 0) || (idx >= this.sci_Range__f_numRangeElements))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  } else {
    return ((this.sci_Range__f_start + Math.imul(this.sci_Range__f_step, idx)) | 0)
  }
});
$c_sci_Range.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Range.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Range.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Range.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return this.apply$mcII$sp__I__I(idx)
});
$c_sci_Range.prototype.apply__I__O = (function(idx) {
  return this.apply$mcII$sp__I__I(idx)
});
function $as_sci_Range(obj) {
  return (((obj instanceof $c_sci_Range) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Range"))
}
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Range)))
}
function $asArrayOf_sci_Range(obj, depth) {
  return (($isArrayOf_sci_Range(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth))
}
var $d_sci_Range = new $TypeData().initClass({
  sci_Range: 0
}, false, "scala.collection.immutable.Range", {
  sci_Range: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range.prototype.$classData = $d_sci_Range;
/** @constructor */
function $c_sci_Stream() {
  /*<skip>*/
}
$c_sci_Stream.prototype = new $h_sc_AbstractSeq();
$c_sci_Stream.prototype.constructor = $c_sci_Stream;
/** @constructor */
function $h_sci_Stream() {
  /*<skip>*/
}
$h_sci_Stream.prototype = $c_sci_Stream.prototype;
$c_sci_Stream.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $s_sc_LinearSeqOptimized$class__sameElements__sc_LinearSeqOptimized__sc_GenIterable__Z(this, that)
});
$c_sci_Stream.prototype.lengthCompare__I__I = (function(len) {
  return $s_sc_LinearSeqOptimized$class__lengthCompare__sc_LinearSeqOptimized__I__I(this, len)
});
$c_sci_Stream.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Stream.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Stream$()
});
$c_sci_Stream.prototype.append__F0__sci_Stream = (function(rest) {
  if (this.isEmpty__Z()) {
    return $as_sc_GenTraversableOnce(rest.apply__O()).toStream__sci_Stream()
  } else {
    var hd = this.head__O();
    var tl = new $c_sjsr_AnonFunction0(((this$1, rest$1) => (() => $as_sci_Stream(this$1.tail__O()).append__F0__sci_Stream(rest$1)))(this, rest));
    return new $c_sci_Stream$Cons(hd, tl)
  }
});
$c_sci_Stream.prototype.force__sci_Stream = (function() {
  var these = this;
  var those = this;
  if ((!these.isEmpty__Z())) {
    these = $as_sci_Stream(these.tail__O())
  };
  while ((those !== these)) {
    if (these.isEmpty__Z()) {
      return this
    };
    these = $as_sci_Stream(these.tail__O());
    if (these.isEmpty__Z()) {
      return this
    };
    these = $as_sci_Stream(these.tail__O());
    if ((these === those)) {
      return this
    };
    those = $as_sci_Stream(those.tail__O())
  };
  return this
});
$c_sci_Stream.prototype.length__I = (function() {
  var len = 0;
  var left = this;
  while ((!left.isEmpty__Z())) {
    len = ((1 + len) | 0);
    left = $as_sci_Stream(left.tail__O())
  };
  return len
});
$c_sci_Stream.prototype.toStream__sci_Stream = (function() {
  return this
});
$c_sci_Stream.prototype.flatMap__F1__scg_CanBuildFrom__O = (function(f, bf) {
  if ((bf.apply__O__scm_Builder(this) instanceof $c_sci_Stream$StreamBuilder)) {
    if (this.isEmpty__Z()) {
      var x$1 = $m_sci_Stream$Empty$()
    } else {
      var nonEmptyPrefix = new $c_sr_ObjectRef(this);
      var prefix = $as_sc_GenTraversableOnce(f.apply__O__O($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).head__O())).toStream__sci_Stream();
      while (((!$as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z()) && prefix.isEmpty__Z())) {
        nonEmptyPrefix.sr_ObjectRef__f_elem = $as_sci_Stream($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).tail__O());
        if ((!$as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z())) {
          prefix = $as_sc_GenTraversableOnce(f.apply__O__O($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).head__O())).toStream__sci_Stream()
        }
      };
      var x$1 = ($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z() ? ($m_sci_Stream$(), $m_sci_Stream$Empty$()) : prefix.append__F0__sci_Stream(new $c_sjsr_AnonFunction0(((this$3, f$1, nonEmptyPrefix$1) => (() => {
        var x = $as_sci_Stream($as_sci_Stream(nonEmptyPrefix$1.sr_ObjectRef__f_elem).tail__O()).flatMap__F1__scg_CanBuildFrom__O(f$1, ($m_sci_Stream$(), new $c_sci_Stream$StreamCanBuildFrom()));
        return $as_sci_Stream(x)
      }))(this, f, nonEmptyPrefix))))
    };
    return x$1
  } else {
    return $s_sc_TraversableLike$class__flatMap__sc_TraversableLike__F1__scg_CanBuildFrom__O(this, f, bf)
  }
});
$c_sci_Stream.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_StreamIterator(this)
});
$c_sci_Stream.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while ((!_$this.isEmpty__Z())) {
    f.apply__O__O(_$this.head__O());
    _$this = $as_sci_Stream(_$this.tail__O())
  }
});
$c_sci_Stream.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  b.append__T__scm_StringBuilder(start);
  if ((!this.isEmpty__Z())) {
    b.append__O__scm_StringBuilder(this.head__O());
    var cursor = this;
    var n = 1;
    if (cursor.tailDefined__Z()) {
      var scout = $as_sci_Stream(this.tail__O());
      if (scout.isEmpty__Z()) {
        b.append__T__scm_StringBuilder(end);
        return b
      };
      if ((cursor !== scout)) {
        cursor = scout;
        if (scout.tailDefined__Z()) {
          scout = $as_sci_Stream(scout.tail__O());
          while (((cursor !== scout) && scout.tailDefined__Z())) {
            b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
            n = ((1 + n) | 0);
            cursor = $as_sci_Stream(cursor.tail__O());
            scout = $as_sci_Stream(scout.tail__O());
            if (scout.tailDefined__Z()) {
              scout = $as_sci_Stream(scout.tail__O())
            }
          }
        }
      };
      if ((!scout.tailDefined__Z())) {
        while ((cursor !== scout)) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        var this$1 = cursor;
        if ((!this$1.isEmpty__Z())) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O())
        }
      } else {
        var runner = this;
        var k = 0;
        while ((runner !== scout)) {
          runner = $as_sci_Stream(runner.tail__O());
          scout = $as_sci_Stream(scout.tail__O());
          k = ((1 + k) | 0)
        };
        if (((cursor === scout) && (k > 0))) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        while ((cursor !== scout)) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        n = ((n - k) | 0)
      }
    };
    if ((!cursor.isEmpty__Z())) {
      if ((!cursor.tailDefined__Z())) {
        b.append__T__scm_StringBuilder(sep).append__T__scm_StringBuilder("?")
      } else {
        b.append__T__scm_StringBuilder(sep).append__T__scm_StringBuilder("...")
      }
    }
  };
  b.append__T__scm_StringBuilder(end);
  return b
});
$c_sci_Stream.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  this.force__sci_Stream();
  return $s_sc_TraversableOnce$class__mkString__sc_TraversableOnce__T__T__T__T(this, start, sep, end)
});
$c_sci_Stream.prototype.toString__T = (function() {
  return $s_sc_TraversableOnce$class__mkString__sc_TraversableOnce__T__T__T__T(this, "Stream(", ", ", ")")
});
$c_sci_Stream.prototype.drop__I__sci_Stream = (function(n) {
  var _$this = this;
  while (true) {
    if (((n <= 0) || _$this.isEmpty__Z())) {
      return _$this
    } else {
      var temp$_$this = $as_sci_Stream(_$this.tail__O());
      var temp$n = (((-1) + n) | 0);
      _$this = temp$_$this;
      n = temp$n
    }
  }
});
$c_sci_Stream.prototype.stringPrefix__T = (function() {
  return "Stream"
});
$c_sci_Stream.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Stream.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Stream.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Stream.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $s_sc_LinearSeqOptimized$class__apply__sc_LinearSeqOptimized__I__O(this, n)
});
$c_sci_Stream.prototype.drop__I__sc_LinearSeqOptimized = (function(n) {
  return this.drop__I__sci_Stream(n)
});
function $as_sci_Stream(obj) {
  return (((obj instanceof $c_sci_Stream) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream"))
}
function $isArrayOf_sci_Stream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream)))
}
function $asArrayOf_sci_Stream(obj, depth) {
  return (($isArrayOf_sci_Stream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth))
}
function $as_sci_HashMap$HashMap1(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMap1"))
}
function $isArrayOf_sci_HashMap$HashMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMap1)))
}
function $asArrayOf_sci_HashMap$HashMap1(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMap1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMap1;", depth))
}
function $as_sci_HashMap$HashTrieMap(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashTrieMap"))
}
function $isArrayOf_sci_HashMap$HashTrieMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashTrieMap)))
}
function $asArrayOf_sci_HashMap$HashTrieMap(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashTrieMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashTrieMap;", depth))
}
/** @constructor */
function $c_sci_Range$Inclusive(start, end, step) {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_numRangeElements = 0;
  this.sci_Range__f_lastElement = 0;
  this.sci_Range__f_terminalElement = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step)
}
$c_sci_Range$Inclusive.prototype = new $h_sci_Range();
$c_sci_Range$Inclusive.prototype.constructor = $c_sci_Range$Inclusive;
/** @constructor */
function $h_sci_Range$Inclusive() {
  /*<skip>*/
}
$h_sci_Range$Inclusive.prototype = $c_sci_Range$Inclusive.prototype;
$c_sci_Range$Inclusive.prototype.isInclusive__Z = (function() {
  return true
});
var $d_sci_Range$Inclusive = new $TypeData().initClass({
  sci_Range$Inclusive: 0
}, false, "scala.collection.immutable.Range$Inclusive", {
  sci_Range$Inclusive: 1,
  sci_Range: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$Inclusive.prototype.$classData = $d_sci_Range$Inclusive;
/** @constructor */
function $c_sci_Stream$Cons(hd, tl) {
  this.sci_Stream$Cons__f_hd = null;
  this.sci_Stream$Cons__f_tlVal = null;
  this.sci_Stream$Cons__f_tlGen = null;
  this.sci_Stream$Cons__f_hd = hd;
  this.sci_Stream$Cons__f_tlGen = tl
}
$c_sci_Stream$Cons.prototype = new $h_sci_Stream();
$c_sci_Stream$Cons.prototype.constructor = $c_sci_Stream$Cons;
/** @constructor */
function $h_sci_Stream$Cons() {
  /*<skip>*/
}
$h_sci_Stream$Cons.prototype = $c_sci_Stream$Cons.prototype;
$c_sci_Stream$Cons.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_Stream$Cons.prototype.head__O = (function() {
  return this.sci_Stream$Cons__f_hd
});
$c_sci_Stream$Cons.prototype.tailDefined__Z = (function() {
  return (this.sci_Stream$Cons__f_tlGen === null)
});
$c_sci_Stream$Cons.prototype.tail__sci_Stream = (function() {
  if ((!this.tailDefined__Z())) {
    if ((!this.tailDefined__Z())) {
      this.sci_Stream$Cons__f_tlVal = $as_sci_Stream(this.sci_Stream$Cons__f_tlGen.apply__O());
      this.sci_Stream$Cons__f_tlGen = null
    }
  };
  return this.sci_Stream$Cons__f_tlVal
});
$c_sci_Stream$Cons.prototype.tail__O = (function() {
  return this.tail__sci_Stream()
});
var $d_sci_Stream$Cons = new $TypeData().initClass({
  sci_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", {
  sci_Stream$Cons: 1,
  sci_Stream: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Cons.prototype.$classData = $d_sci_Stream$Cons;
/** @constructor */
function $c_sci_Stream$Empty$() {
  /*<skip>*/
}
$c_sci_Stream$Empty$.prototype = new $h_sci_Stream();
$c_sci_Stream$Empty$.prototype.constructor = $c_sci_Stream$Empty$;
/** @constructor */
function $h_sci_Stream$Empty$() {
  /*<skip>*/
}
$h_sci_Stream$Empty$.prototype = $c_sci_Stream$Empty$.prototype;
$c_sci_Stream$Empty$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Stream$Empty$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty stream")
});
$c_sci_Stream$Empty$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty stream")
});
$c_sci_Stream$Empty$.prototype.tailDefined__Z = (function() {
  return false
});
$c_sci_Stream$Empty$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Stream$Empty$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Stream$Empty$ = new $TypeData().initClass({
  sci_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", {
  sci_Stream$Empty$: 1,
  sci_Stream: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Empty$.prototype.$classData = $d_sci_Stream$Empty$;
var $n_sci_Stream$Empty$;
function $m_sci_Stream$Empty$() {
  if ((!$n_sci_Stream$Empty$)) {
    $n_sci_Stream$Empty$ = new $c_sci_Stream$Empty$()
  };
  return $n_sci_Stream$Empty$
}
function $p_sci_Vector__checkRangeConvert__I__I($thiz, index) {
  var idx = ((index + $thiz.sci_Vector__f_startIndex) | 0);
  if (((index >= 0) && (idx < $thiz.sci_Vector__f_endIndex))) {
    return idx
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + index))
  }
}
/** @constructor */
function $c_sci_Vector(startIndex, endIndex, focus) {
  this.sci_Vector__f_startIndex = 0;
  this.sci_Vector__f_endIndex = 0;
  this.sci_Vector__f_focus = 0;
  this.sci_Vector__f_dirty = false;
  this.sci_Vector__f_depth = 0;
  this.sci_Vector__f_display0 = null;
  this.sci_Vector__f_display1 = null;
  this.sci_Vector__f_display2 = null;
  this.sci_Vector__f_display3 = null;
  this.sci_Vector__f_display4 = null;
  this.sci_Vector__f_display5 = null;
  this.sci_Vector__f_startIndex = startIndex;
  this.sci_Vector__f_endIndex = endIndex;
  this.sci_Vector__f_focus = focus;
  this.sci_Vector__f_dirty = false
}
$c_sci_Vector.prototype = new $h_sc_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.depth__I = (function() {
  return this.sci_Vector__f_depth
});
$c_sci_Vector.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_Vector__f_depth = x$1
});
$c_sci_Vector.prototype.display0__AO = (function() {
  return this.sci_Vector__f_display0
});
$c_sci_Vector.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display0 = x$1
});
$c_sci_Vector.prototype.display1__AO = (function() {
  return this.sci_Vector__f_display1
});
$c_sci_Vector.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display1 = x$1
});
$c_sci_Vector.prototype.display2__AO = (function() {
  return this.sci_Vector__f_display2
});
$c_sci_Vector.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display2 = x$1
});
$c_sci_Vector.prototype.display3__AO = (function() {
  return this.sci_Vector__f_display3
});
$c_sci_Vector.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display3 = x$1
});
$c_sci_Vector.prototype.display4__AO = (function() {
  return this.sci_Vector__f_display4
});
$c_sci_Vector.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display4 = x$1
});
$c_sci_Vector.prototype.display5__AO = (function() {
  return this.sci_Vector__f_display5
});
$c_sci_Vector.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display5 = x$1
});
$c_sci_Vector.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Vector.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Vector$()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this.sci_Vector__f_endIndex - this.sci_Vector__f_startIndex) | 0)
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  return ((this.length__I() - len) | 0)
});
$c_sci_Vector.prototype.initIterator__sci_VectorIterator__V = (function(s) {
  var depth = this.sci_Vector__f_depth;
  $s_sci_VectorPointer$class__initFrom__sci_VectorPointer__sci_VectorPointer__I__V(s, this, depth);
  if (this.sci_Vector__f_dirty) {
    var index = this.sci_Vector__f_focus;
    $s_sci_VectorPointer$class__stabilize__sci_VectorPointer__I__V(s, index)
  };
  if ((s.sci_VectorIterator__f_depth > 1)) {
    var index$1 = this.sci_Vector__f_startIndex;
    var xor = (this.sci_Vector__f_startIndex ^ this.sci_Vector__f_focus);
    $s_sci_VectorPointer$class__gotoPos__sci_VectorPointer__I__I__V(s, index$1, xor)
  }
});
$c_sci_Vector.prototype.iterator__sci_VectorIterator = (function() {
  var s = new $c_sci_VectorIterator(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex);
  this.initIterator__sci_VectorIterator__V(s);
  return s
});
$c_sci_Vector.prototype.apply__I__O = (function(index) {
  var idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
  var xor = (idx ^ this.sci_Vector__f_focus);
  return $s_sci_VectorPointer$class__getElem__sci_VectorPointer__I__I__O(this, idx, xor)
});
$c_sci_Vector.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Vector.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Vector.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Vector.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return this.iterator__sci_VectorIterator()
});
var $d_sci_Vector = new $TypeData().initClass({
  sci_Vector: 0
}, false, "scala.collection.immutable.Vector", {
  sci_Vector: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sci_VectorPointer: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1
});
$c_sci_Vector.prototype.$classData = $d_sci_Vector;
/** @constructor */
function $c_sci_$colon$colon(head, tl) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_tl = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_tl = tl
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head
});
$c_sci_$colon$colon.prototype.tail__sci_List = (function() {
  return this.sci_$colon$colon__f_tl
});
$c_sci_$colon$colon.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break
    }
    case 1: {
      return this.sci_$colon$colon__f_tl;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_tl
});
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  Ljava_io_Serializable: 1,
  s_Serializable: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_Nil$() {
  /*<skip>*/
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Nil$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
});
$c_sci_Nil$.prototype.tail__sci_List = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.equals__O__Z = (function(that) {
  if ($is_sc_GenSeq(that)) {
    var x2 = $as_sc_GenSeq(that);
    return x2.isEmpty__Z()
  } else {
    return false
  }
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  return this.tail__sci_List()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  Ljava_io_Serializable: 1,
  s_Serializable: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_scm_AbstractMap() {
  /*<skip>*/
}
$c_scm_AbstractMap.prototype = new $h_sc_AbstractMap();
$c_scm_AbstractMap.prototype.constructor = $c_scm_AbstractMap;
/** @constructor */
function $h_scm_AbstractMap() {
  /*<skip>*/
}
$h_scm_AbstractMap.prototype = $c_scm_AbstractMap.prototype;
$c_scm_AbstractMap.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_HashMap__(new $c_scm_HashMap())
});
$c_scm_AbstractMap.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_AbstractMap.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_AbstractMap.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_AbstractMap.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_Iterable$()
});
/** @constructor */
function $c_scm_AbstractSet() {
  /*<skip>*/
}
$c_scm_AbstractSet.prototype = new $h_scm_AbstractIterable();
$c_scm_AbstractSet.prototype.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
  /*<skip>*/
}
$h_scm_AbstractSet.prototype = $c_scm_AbstractSet.prototype;
$c_scm_AbstractSet.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet())
});
$c_scm_AbstractSet.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_AbstractSet.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_AbstractSet.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_AbstractSet.prototype.isEmpty__Z = (function() {
  return $s_sc_SetLike$class__isEmpty__sc_SetLike__Z(this)
});
$c_scm_AbstractSet.prototype.stringPrefix__T = (function() {
  return "Set"
});
$c_scm_AbstractSet.prototype.toString__T = (function() {
  return $s_sc_TraversableLike$class__toString__sc_TraversableLike__T(this)
});
$c_scm_AbstractSet.prototype.subsetOf__sc_GenSet__Z = (function(that) {
  var this$1 = new $c_scm_FlatHashTable$$anon$1(this);
  return $s_sc_Iterator$class__forall__sc_Iterator__F1__Z(this$1, that)
});
$c_scm_AbstractSet.prototype.equals__O__Z = (function(that) {
  return $s_sc_GenSetLike$class__equals__sc_GenSetLike__O__Z(this, that)
});
$c_scm_AbstractSet.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.unorderedHash__sc_TraversableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
});
function $ct_scm_LinkedList__($thiz) {
  $thiz.scm_LinkedList__f_next = $thiz;
  return $thiz
}
function $ct_scm_LinkedList__O__scm_LinkedList__($thiz, elem, next) {
  $ct_scm_LinkedList__($thiz);
  if ((next !== null)) {
    $thiz.scm_LinkedList__f_elem = elem;
    $thiz.scm_LinkedList__f_next = next
  };
  return $thiz
}
/** @constructor */
function $c_scm_LinkedList() {
  this.scm_LinkedList__f_elem = null;
  this.scm_LinkedList__f_next = null
}
$c_scm_LinkedList.prototype = new $h_scm_AbstractSeq();
$c_scm_LinkedList.prototype.constructor = $c_scm_LinkedList;
/** @constructor */
function $h_scm_LinkedList() {
  /*<skip>*/
}
$h_scm_LinkedList.prototype = $c_scm_LinkedList.prototype;
$c_scm_LinkedList.prototype.isEmpty__Z = (function() {
  return $s_scm_LinkedListLike$class__isEmpty__scm_LinkedListLike__Z(this)
});
$c_scm_LinkedList.prototype.length__I = (function() {
  return $ps_scm_LinkedListLike$class__length0__scm_LinkedListLike__scm_Seq__I__I(this, this, 0)
});
$c_scm_LinkedList.prototype.head__O = (function() {
  return $s_scm_LinkedListLike$class__head__scm_LinkedListLike__O(this)
});
$c_scm_LinkedList.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_LinkedListLike$$anon$1(this)
});
$c_scm_LinkedList.prototype.foreach__F1__V = (function(f) {
  $s_scm_LinkedListLike$class__foreach__scm_LinkedListLike__F1__V(this, f)
});
$c_scm_LinkedList.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_LinkedList.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_LinkedList$()
});
$c_scm_LinkedList.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_LinkedList.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_LinkedList.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_LinkedList.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_LinkedList.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $s_scm_LinkedListLike$class__apply__scm_LinkedListLike__I__O(this, n)
});
$c_scm_LinkedList.prototype.tail__O = (function() {
  return $s_scm_LinkedListLike$class__tail__scm_LinkedListLike__scm_Seq(this)
});
function $as_scm_LinkedList(obj) {
  return (((obj instanceof $c_scm_LinkedList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.LinkedList"))
}
function $isArrayOf_scm_LinkedList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_LinkedList)))
}
function $asArrayOf_scm_LinkedList(obj, depth) {
  return (($isArrayOf_scm_LinkedList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.LinkedList;", depth))
}
var $d_scm_LinkedList = new $TypeData().initClass({
  scm_LinkedList: 0
}, false, "scala.collection.mutable.LinkedList", {
  scm_LinkedList: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  scm_LinkedListLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_LinkedList.prototype.$classData = $d_scm_LinkedList;
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs)
});
function $ct_scm_MutableList__($thiz) {
  $thiz.scm_MutableList__f_first0 = $ct_scm_LinkedList__(new $c_scm_LinkedList());
  $thiz.scm_MutableList__f_last0 = $thiz.scm_MutableList__f_first0;
  $thiz.scm_MutableList__f_len = 0;
  return $thiz
}
/** @constructor */
function $c_scm_MutableList() {
  this.scm_MutableList__f_first0 = null;
  this.scm_MutableList__f_last0 = null;
  this.scm_MutableList__f_len = 0
}
$c_scm_MutableList.prototype = new $h_scm_AbstractSeq();
$c_scm_MutableList.prototype.constructor = $c_scm_MutableList;
/** @constructor */
function $h_scm_MutableList() {
  /*<skip>*/
}
$h_scm_MutableList.prototype = $c_scm_MutableList.prototype;
$c_scm_MutableList.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_MutableList.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_MutableList.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_MutableList.prototype.foreach__F1__V = (function(f) {
  $s_sc_LinearSeqOptimized$class__foreach__sc_LinearSeqOptimized__F1__V(this, f)
});
$c_scm_MutableList.prototype.drop__I__sc_LinearSeqOptimized = (function(n) {
  return $s_sc_LinearSeqOptimized$class__drop__sc_LinearSeqOptimized__I__sc_LinearSeqOptimized(this, n)
});
$c_scm_MutableList.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $s_sc_LinearSeqOptimized$class__sameElements__sc_LinearSeqOptimized__sc_GenIterable__Z(this, that)
});
$c_scm_MutableList.prototype.lengthCompare__I__I = (function(len) {
  return $s_sc_LinearSeqOptimized$class__lengthCompare__sc_LinearSeqOptimized__I__I(this, len)
});
$c_scm_MutableList.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_MutableList.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_MutableList$()
});
$c_scm_MutableList.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_MutableList__(new $c_scm_MutableList())
});
$c_scm_MutableList.prototype.isEmpty__Z = (function() {
  return (this.scm_MutableList__f_len === 0)
});
$c_scm_MutableList.prototype.head__O = (function() {
  if ((!this.isEmpty__Z())) {
    var this$1 = this.scm_MutableList__f_first0;
    return $s_scm_LinkedListLike$class__head__scm_LinkedListLike__O(this$1)
  } else {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  }
});
$c_scm_MutableList.prototype.tail__scm_MutableList = (function() {
  var tl = $ct_scm_MutableList__(new $c_scm_MutableList());
  this.tailImpl__scm_MutableList__V(tl);
  return tl
});
$c_scm_MutableList.prototype.tailImpl__scm_MutableList__V = (function(tl) {
  var requirement = (!this.isEmpty__Z());
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: tail of empty list")
  };
  var this$2 = this.scm_MutableList__f_first0;
  tl.scm_MutableList__f_first0 = $as_scm_LinkedList($s_scm_LinkedListLike$class__tail__scm_LinkedListLike__scm_Seq(this$2));
  tl.scm_MutableList__f_len = (((-1) + this.scm_MutableList__f_len) | 0);
  tl.scm_MutableList__f_last0 = ((tl.scm_MutableList__f_len === 0) ? tl.scm_MutableList__f_first0 : this.scm_MutableList__f_last0)
});
$c_scm_MutableList.prototype.length__I = (function() {
  return this.scm_MutableList__f_len
});
$c_scm_MutableList.prototype.prependElem__O__V = (function(elem) {
  this.scm_MutableList__f_first0 = $ct_scm_LinkedList__O__scm_LinkedList__(new $c_scm_LinkedList(), elem, this.scm_MutableList__f_first0);
  if ((this.scm_MutableList__f_len === 0)) {
    this.scm_MutableList__f_last0 = this.scm_MutableList__f_first0
  };
  this.scm_MutableList__f_len = ((1 + this.scm_MutableList__f_len) | 0)
});
$c_scm_MutableList.prototype.appendElem__O__V = (function(elem) {
  if ((this.scm_MutableList__f_len === 0)) {
    this.prependElem__O__V(elem)
  } else {
    this.scm_MutableList__f_last0.scm_LinkedList__f_next = $ct_scm_LinkedList__(new $c_scm_LinkedList());
    this.scm_MutableList__f_last0 = $as_scm_LinkedList(this.scm_MutableList__f_last0.scm_LinkedList__f_next);
    this.scm_MutableList__f_last0.scm_LinkedList__f_elem = elem;
    this.scm_MutableList__f_last0.scm_LinkedList__f_next = $ct_scm_LinkedList__(new $c_scm_LinkedList());
    this.scm_MutableList__f_len = ((1 + this.scm_MutableList__f_len) | 0)
  }
});
$c_scm_MutableList.prototype.iterator__sc_Iterator = (function() {
  return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_empty : new $c_scm_MutableList$$anon$1(this))
});
$c_scm_MutableList.prototype.$plus$eq__O__scm_MutableList = (function(elem) {
  this.appendElem__O__V(elem);
  return this
});
$c_scm_MutableList.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_MutableList.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_MutableList.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_MutableList.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_MutableList.prototype.result__O = (function() {
  return this
});
$c_scm_MutableList.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_MutableList(elem)
});
$c_scm_MutableList.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_MutableList(elem)
});
$c_scm_MutableList.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  var this$1 = this.scm_MutableList__f_first0;
  return $s_scm_LinkedListLike$class__apply__scm_LinkedListLike__I__O(this$1, n)
});
$c_scm_MutableList.prototype.tail__O = (function() {
  return this.tail__scm_MutableList()
});
function $as_scm_MutableList(obj) {
  return (((obj instanceof $c_scm_MutableList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.MutableList"))
}
function $isArrayOf_scm_MutableList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_MutableList)))
}
function $asArrayOf_scm_MutableList(obj, depth) {
  return (($isArrayOf_scm_MutableList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.MutableList;", depth))
}
var $d_scm_MutableList = new $TypeData().initClass({
  scm_MutableList: 0
}, false, "scala.collection.mutable.MutableList", {
  scm_MutableList: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_MutableList.prototype.$classData = $d_scm_MutableList;
function $ct_scm_HashMap__scm_HashTable$Contents__($thiz, contents) {
  $s_scm_HashTable$class__$init$__scm_HashTable__V($thiz);
  $s_scm_HashTable$class__initWithContents__scm_HashTable__scm_HashTable$Contents__V($thiz, contents);
  return $thiz
}
function $ct_scm_HashMap__($thiz) {
  $ct_scm_HashMap__scm_HashTable$Contents__($thiz, null);
  return $thiz
}
/** @constructor */
function $c_scm_HashMap() {
  this.scm_HashMap__f__loadFactor = 0;
  this.scm_HashMap__f_table = null;
  this.scm_HashMap__f_tableSize = 0;
  this.scm_HashMap__f_threshold = 0;
  this.scm_HashMap__f_sizemap = null;
  this.scm_HashMap__f_seedvalue = 0
}
$c_scm_HashMap.prototype = new $h_scm_AbstractMap();
$c_scm_HashMap.prototype.constructor = $c_scm_HashMap;
/** @constructor */
function $h_scm_HashMap() {
  /*<skip>*/
}
$h_scm_HashMap.prototype = $c_scm_HashMap.prototype;
$c_scm_HashMap.prototype.size__I = (function() {
  return this.scm_HashMap__f_tableSize
});
$c_scm_HashMap.prototype.apply__O__O = (function(key) {
  var result = $as_scm_DefaultEntry($s_scm_HashTable$class__findEntry__scm_HashTable__O__scm_HashEntry(this, key));
  return ((result === null) ? $s_sc_MapLike$class__default__sc_MapLike__O__O(this, key) : result.scm_DefaultEntry__f_value)
});
$c_scm_HashMap.prototype.get__O__s_Option = (function(key) {
  var e = $as_scm_DefaultEntry($s_scm_HashTable$class__findEntry__scm_HashTable__O__scm_HashEntry(this, key));
  return ((e === null) ? $m_s_None$() : new $c_s_Some(e.scm_DefaultEntry__f_value))
});
$c_scm_HashMap.prototype.$plus$eq__T2__scm_HashMap = (function(kv) {
  var key = kv._1__O();
  var value = kv._2__O();
  var e = $as_scm_DefaultEntry($s_scm_HashTable$class__findOrAddEntry__scm_HashTable__O__O__scm_HashEntry(this, key, value));
  if ((e !== null)) {
    e.scm_DefaultEntry__f_value = kv._2__O()
  };
  return this
});
$c_scm_HashMap.prototype.iterator__sc_Iterator = (function() {
  var this$2 = new $c_scm_HashTable$$anon$1(this);
  var f = new $c_sjsr_AnonFunction1(((this$1) => ((e$2) => {
    var e = $as_scm_DefaultEntry(e$2);
    return $ct_T2__O__O__(new $c_T2(), e.scm_DefaultEntry__f_key, e.scm_DefaultEntry__f_value)
  }))(this));
  return new $c_sc_Iterator$$anon$11(this$2, f)
});
$c_scm_HashMap.prototype.foreach__F1__V = (function(f) {
  var iterTable = this.scm_HashMap__f_table;
  var idx = $s_scm_HashTable$class__scala$collection$mutable$HashTable$$lastPopulatedIndex__scm_HashTable__I(this);
  var es = iterTable.get(idx);
  while ((es !== null)) {
    var next = $as_scm_HashEntry(es.scm_DefaultEntry__f_next);
    var arg1 = es;
    var e = $as_scm_DefaultEntry(arg1);
    f.apply__O__O($ct_T2__O__O__(new $c_T2(), e.scm_DefaultEntry__f_key, e.scm_DefaultEntry__f_value));
    es = next;
    while (((es === null) && (idx > 0))) {
      idx = (((-1) + idx) | 0);
      es = iterTable.get(idx)
    }
  }
});
$c_scm_HashMap.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_HashMap.prototype.result__O = (function() {
  return this
});
$c_scm_HashMap.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_HashMap.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__T2__scm_HashMap($as_T2(elem))
});
$c_scm_HashMap.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__T2__scm_HashMap($as_T2(elem))
});
var $d_scm_HashMap = new $TypeData().initClass({
  scm_HashMap: 0
}, false, "scala.collection.mutable.HashMap", {
  scm_HashMap: 1,
  scm_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  scm_Map: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_MapLike: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_HashTable: 1,
  scm_HashTable$HashUtils: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashMap.prototype.$classData = $d_scm_HashMap;
function $p_scm_Queue__decrementLength__V($thiz) {
  $thiz.scm_MutableList__f_len = (((-1) + $thiz.scm_MutableList__f_len) | 0);
  if (($thiz.scm_MutableList__f_len === 0)) {
    $thiz.scm_MutableList__f_last0 = $thiz.scm_MutableList__f_first0
  }
}
function $ct_scm_Queue__($thiz) {
  $ct_scm_MutableList__($thiz);
  return $thiz
}
function $ct_scm_Queue__scm_LinkedList__scm_LinkedList__I__($thiz, fst, lst, lng) {
  $ct_scm_MutableList__($thiz);
  $thiz.scm_MutableList__f_first0 = fst;
  $thiz.scm_MutableList__f_last0 = lst;
  $thiz.scm_MutableList__f_len = lng;
  return $thiz
}
/** @constructor */
function $c_scm_Queue() {
  this.scm_MutableList__f_first0 = null;
  this.scm_MutableList__f_last0 = null;
  this.scm_MutableList__f_len = 0
}
$c_scm_Queue.prototype = new $h_scm_MutableList();
$c_scm_Queue.prototype.constructor = $c_scm_Queue;
/** @constructor */
function $h_scm_Queue() {
  /*<skip>*/
}
$h_scm_Queue.prototype = $c_scm_Queue.prototype;
$c_scm_Queue.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_Queue$()
});
$c_scm_Queue.prototype.newBuilder__scm_Builder = (function() {
  return $m_scm_Queue$().newBuilder__scm_Builder()
});
$c_scm_Queue.prototype.dequeue__O = (function() {
  if (this.isEmpty__Z()) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "queue empty")
  } else {
    var res = this.scm_MutableList__f_first0.scm_LinkedList__f_elem;
    this.scm_MutableList__f_first0 = $as_scm_LinkedList(this.scm_MutableList__f_first0.scm_LinkedList__f_next);
    $p_scm_Queue__decrementLength__V(this);
    return res
  }
});
$c_scm_Queue.prototype.tail__scm_Queue = (function() {
  var tl = $ct_scm_Queue__(new $c_scm_Queue());
  this.tailImpl__scm_MutableList__V(tl);
  return tl
});
$c_scm_Queue.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_Queue.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_Queue.prototype.tail__O = (function() {
  return this.tail__scm_Queue()
});
$c_scm_Queue.prototype.tail__scm_MutableList = (function() {
  return this.tail__scm_Queue()
});
function $as_scm_Queue(obj) {
  return (((obj instanceof $c_scm_Queue) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Queue"))
}
function $isArrayOf_scm_Queue(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Queue)))
}
function $asArrayOf_scm_Queue(obj, depth) {
  return (($isArrayOf_scm_Queue(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Queue;", depth))
}
var $d_scm_Queue = new $TypeData().initClass({
  scm_Queue: 0
}, false, "scala.collection.mutable.Queue", {
  scm_Queue: 1,
  scm_MutableList: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Queue.prototype.$classData = $d_scm_Queue;
function $ct_scm_HashSet__scm_FlatHashTable$Contents__($thiz, contents) {
  $s_scm_FlatHashTable$class__$init$__scm_FlatHashTable__V($thiz);
  $s_scm_FlatHashTable$class__initWithContents__scm_FlatHashTable__scm_FlatHashTable$Contents__V($thiz, contents);
  return $thiz
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__scm_FlatHashTable$Contents__($thiz, null);
  return $thiz
}
/** @constructor */
function $c_scm_HashSet() {
  this.scm_HashSet__f__loadFactor = 0;
  this.scm_HashSet__f_table = null;
  this.scm_HashSet__f_tableSize = 0;
  this.scm_HashSet__f_threshold = 0;
  this.scm_HashSet__f_sizemap = null;
  this.scm_HashSet__f_seedvalue = 0
}
$c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$c_scm_HashSet.prototype.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
  /*<skip>*/
}
$h_scm_HashSet.prototype = $c_scm_HashSet.prototype;
$c_scm_HashSet.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_HashSet$()
});
$c_scm_HashSet.prototype.size__I = (function() {
  return this.scm_HashSet__f_tableSize
});
$c_scm_HashSet.prototype.$plus$eq__O__scm_HashSet = (function(elem) {
  $s_scm_FlatHashTable$class__addElem__scm_FlatHashTable__O__Z(this, elem);
  return this
});
$c_scm_HashSet.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_FlatHashTable$$anon$1(this)
});
$c_scm_HashSet.prototype.foreach__F1__V = (function(f) {
  var i = 0;
  var len = this.scm_HashSet__f_table.u.length;
  while ((i < len)) {
    var curEntry = this.scm_HashSet__f_table.get(i);
    if ((curEntry !== null)) {
      f.apply__O__O($s_scm_FlatHashTable$HashUtils$class__entryToElem__scm_FlatHashTable$HashUtils__O__O(this, curEntry))
    };
    i = ((1 + i) | 0)
  }
});
$c_scm_HashSet.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_HashSet.prototype.apply__O__O = (function(v1) {
  return $s_scm_FlatHashTable$class__containsElem__scm_FlatHashTable__O__Z(this, v1)
});
$c_scm_HashSet.prototype.$plus__O__sc_Set = (function(elem) {
  var this$1 = $ct_scm_HashSet__(new $c_scm_HashSet());
  var this$2 = $as_scm_HashSet($s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this$1, this));
  return this$2.$plus$eq__O__scm_HashSet(elem)
});
$c_scm_HashSet.prototype.result__O = (function() {
  return this
});
$c_scm_HashSet.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_HashSet.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_HashSet(elem)
});
$c_scm_HashSet.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_HashSet(elem)
});
function $as_scm_HashSet(obj) {
  return (((obj instanceof $c_scm_HashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashSet"))
}
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashSet)))
}
function $asArrayOf_scm_HashSet(obj, depth) {
  return (($isArrayOf_scm_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashSet;", depth))
}
var $d_scm_HashSet = new $TypeData().initClass({
  scm_HashSet: 0
}, false, "scala.collection.mutable.HashSet", {
  scm_HashSet: 1,
  scm_AbstractSet: 1,
  scm_AbstractIterable: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_Set: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  scm_SetLike: 1,
  sc_script_Scriptable: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_FlatHashTable: 1,
  scm_FlatHashTable$HashUtils: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_HashSet.prototype.$classData = $d_scm_HashSet;
function $p_scm_ListBuffer__copy__V($thiz) {
  if ($thiz.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.isEmpty__Z()) {
    return (void 0)
  };
  var cursor = $thiz.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  var this$1 = $thiz.scm_ListBuffer__f_last0;
  var limit = this$1.sci_$colon$colon__f_tl;
  $thiz.clear__V();
  while ((cursor !== limit)) {
    $thiz.$plus$eq__O__scm_ListBuffer(cursor.head__O());
    var this$2 = cursor;
    cursor = this$2.tail__sci_List()
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = $m_sci_Nil$();
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
  /*<skip>*/
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.lengthCompare__I__I = (function(len) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $s_sc_LinearSeqOptimized$class__lengthCompare__sc_LinearSeqOptimized__I__I(this$1, len)
});
$c_scm_ListBuffer.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $s_sc_LinearSeqOptimized$class__sameElements__sc_LinearSeqOptimized__sc_GenIterable__Z(this$1, that)
});
$c_scm_ListBuffer.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  var these = this$1;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    var this$2 = these;
    these = this$2.tail__sci_List()
  }
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.isEmpty__Z()
});
$c_scm_ListBuffer.prototype.nonEmpty__Z = (function() {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return (!this$1.isEmpty__Z())
});
$c_scm_ListBuffer.prototype.toStream__sci_Stream = (function() {
  return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.toStream__sci_Stream()
});
$c_scm_ListBuffer.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $s_sc_TraversableOnce$class__mkString__sc_TraversableOnce__T__T__T__T(this$1, start, sep, end)
});
$c_scm_ListBuffer.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $s_sc_TraversableOnce$class__addString__sc_TraversableOnce__scm_StringBuilder__T__T__T__scm_StringBuilder(this$1, b, start, sep, end)
});
$c_scm_ListBuffer.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_ListBuffer.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_ListBuffer.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_ListBuffer$()
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.size__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(n) {
  if (((n < 0) || (n >= this.scm_ListBuffer__f_len))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  } else {
    var this$2 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $s_sc_LinearSeqOptimized$class__apply__sc_LinearSeqOptimized__I__O(this$2, n)
  }
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scm_ListBuffer = (function(x) {
  if (this.scm_ListBuffer__f_exported) {
    $p_scm_ListBuffer__copy__V(this)
  };
  if (this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.isEmpty__Z()) {
    this.scm_ListBuffer__f_last0 = new $c_sci_$colon$colon(x, $m_sci_Nil$());
    this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = this.scm_ListBuffer__f_last0
  } else {
    var last1 = this.scm_ListBuffer__f_last0;
    this.scm_ListBuffer__f_last0 = new $c_sci_$colon$colon(x, $m_sci_Nil$());
    last1.sci_$colon$colon__f_tl = this.scm_ListBuffer__f_last0
  };
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this
});
$c_scm_ListBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer = (function(xs) {
  while (true) {
    var x1 = xs;
    if ((x1 !== null)) {
      if ((x1 === this)) {
        var n = this.scm_ListBuffer__f_len;
        xs = $as_sc_TraversableOnce($s_sc_IterableLike$class__take__sc_IterableLike__I__O(this, n));
        continue
      }
    };
    return $as_scm_ListBuffer($s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs))
  }
});
$c_scm_ListBuffer.prototype.clear__V = (function() {
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_exported = (!this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.isEmpty__Z());
  return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start
});
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_ListBuffer$$anon$1(this)
});
$c_scm_ListBuffer.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ListBuffer)) {
    var x2 = $as_scm_ListBuffer(that);
    return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.equals__O__Z(x2.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start)
  } else {
    return $s_sc_GenSeqLike$class__equals__sc_GenSeqLike__O__Z(this, that)
  }
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer"
});
$c_scm_ListBuffer.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_ListBuffer.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List()
});
$c_scm_ListBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer(xs)
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
var $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_Builder: 1,
  scg_SeqForwarder: 1,
  scg_IterableForwarder: 1,
  scg_TraversableForwarder: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__I__T__($thiz, initCapacity, initValue) {
  var this$1 = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), (($uI(initValue.length) + initCapacity) | 0));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + initValue);
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, this$1);
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__I__T__($thiz, 16, "");
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_StringBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_StringBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return $s_sc_IndexedSeqOptimized$class__isEmpty__sc_IndexedSeqOptimized__Z(this)
});
$c_scm_StringBuilder.prototype.foreach__F1__V = (function(f) {
  $s_sc_IndexedSeqOptimized$class__foreach__sc_IndexedSeqOptimized__F1__V(this, f)
});
$c_scm_StringBuilder.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $s_sc_IndexedSeqOptimized$class__sameElements__sc_IndexedSeqOptimized__sc_GenIterable__Z(this, that)
});
$c_scm_StringBuilder.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $s_sc_IndexedSeqOptimized$class__copyToArray__sc_IndexedSeqOptimized__O__I__I__V(this, xs, start, len)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  return $s_sc_IndexedSeqOptimized$class__lengthCompare__sc_IndexedSeqOptimized__I__I(this, len)
});
$c_scm_StringBuilder.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_IndexedSeq$()
});
$c_scm_StringBuilder.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqLike$Elements(this, 0, this.scm_StringBuilder__f_underlying.length__I())
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.substring__I__I__T = (function(start, end) {
  return this.scm_StringBuilder__f_underlying.substring__I__I__T(start, end)
});
$c_scm_StringBuilder.prototype.$plus$eq__C__scm_StringBuilder = (function(x) {
  this.append__C__scm_StringBuilder(x);
  return this
});
$c_scm_StringBuilder.prototype.append__O__scm_StringBuilder = (function(x) {
  var this$2 = this.scm_StringBuilder__f_underlying;
  var str = ("" + x);
  this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
  return this
});
$c_scm_StringBuilder.prototype.append__T__scm_StringBuilder = (function(s) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s);
  return this
});
$c_scm_StringBuilder.prototype.append__C__scm_StringBuilder = (function(x) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  var str = $as_T(String.fromCharCode(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_StringBuilder.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_StringBuilder.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(index))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(idx) {
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(idx))
});
$c_scm_StringBuilder.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()))
});
$c_scm_StringBuilder.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  jl_CharSequence: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sjs_js_WrappedArray.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sjs_js_WrappedArray.prototype.isEmpty__Z = (function() {
  return $s_sc_IndexedSeqOptimized$class__isEmpty__sc_IndexedSeqOptimized__Z(this)
});
$c_sjs_js_WrappedArray.prototype.foreach__F1__V = (function(f) {
  $s_sc_IndexedSeqOptimized$class__foreach__sc_IndexedSeqOptimized__F1__V(this, f)
});
$c_sjs_js_WrappedArray.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $s_sc_IndexedSeqOptimized$class__sameElements__sc_IndexedSeqOptimized__sc_GenIterable__Z(this, that)
});
$c_sjs_js_WrappedArray.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $s_sc_IndexedSeqOptimized$class__copyToArray__sc_IndexedSeqOptimized__O__I__I__V(this, xs, start, len)
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  return $s_sc_IndexedSeqOptimized$class__lengthCompare__sc_IndexedSeqOptimized__I__I(this, len)
});
$c_sjs_js_WrappedArray.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqLike$Elements(this, 0, $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length))
});
$c_sjs_js_WrappedArray.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sjs_js_WrappedArray$()
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.seq__scm_Seq = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
function $ct_scm_ArrayBuffer__I__($thiz, initialSize) {
  $thiz.scm_ArrayBuffer__f_initialSize = initialSize;
  $s_scm_ResizableArray$class__$init$__scm_ResizableArray__V($thiz);
  return $thiz
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__I__($thiz, 16);
  return $thiz
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.scm_ArrayBuffer__f_initialSize = 0;
  this.scm_ArrayBuffer__f_array = null;
  this.scm_ArrayBuffer__f_size0 = 0
}
$c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ArrayBuffer.prototype.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
  /*<skip>*/
}
$h_scm_ArrayBuffer.prototype = $c_scm_ArrayBuffer.prototype;
$c_scm_ArrayBuffer.prototype.length__I = (function() {
  return this.scm_ArrayBuffer__f_size0
});
$c_scm_ArrayBuffer.prototype.apply__I__O = (function(idx) {
  return $s_scm_ResizableArray$class__apply__scm_ResizableArray__I__O(this, idx)
});
$c_scm_ArrayBuffer.prototype.foreach__F1__V = (function(f) {
  $s_scm_ResizableArray$class__foreach__scm_ResizableArray__F1__V(this, f)
});
$c_scm_ArrayBuffer.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $s_scm_ResizableArray$class__copyToArray__scm_ResizableArray__O__I__I__V(this, xs, start, len)
});
$c_scm_ArrayBuffer.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $s_scm_Builder$class__sizeHintBounded__scm_Builder__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_ArrayBuffer.prototype.isEmpty__Z = (function() {
  return $s_sc_IndexedSeqOptimized$class__isEmpty__sc_IndexedSeqOptimized__Z(this)
});
$c_scm_ArrayBuffer.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $s_sc_IndexedSeqOptimized$class__sameElements__sc_IndexedSeqOptimized__sc_GenIterable__Z(this, that)
});
$c_scm_ArrayBuffer.prototype.lengthCompare__I__I = (function(len) {
  return $s_sc_IndexedSeqOptimized$class__lengthCompare__sc_IndexedSeqOptimized__I__I(this, len)
});
$c_scm_ArrayBuffer.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_ArrayBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqLike$Elements(this, 0, this.scm_ArrayBuffer__f_size0)
});
$c_scm_ArrayBuffer.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_ArrayBuffer$()
});
$c_scm_ArrayBuffer.prototype.sizeHint__I__V = (function(len) {
  if (((len > this.scm_ArrayBuffer__f_size0) && (len >= 1))) {
    var newarray = new $ac_O(len);
    var src = this.scm_ArrayBuffer__f_array;
    var length = this.scm_ArrayBuffer__f_size0;
    src.copyTo(0, newarray, 0, length);
    this.scm_ArrayBuffer__f_array = newarray
  }
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scm_ArrayBuffer = (function(elem) {
  var n = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  $s_scm_ResizableArray$class__ensureSize__scm_ResizableArray__I__V(this, n);
  this.scm_ArrayBuffer__f_array.set(this.scm_ArrayBuffer__f_size0, elem);
  this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  return this
});
$c_scm_ArrayBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer = (function(xs) {
  if ($is_sc_IndexedSeqLike(xs)) {
    var x2 = $as_sc_IndexedSeqLike(xs);
    var n = x2.length__I();
    var n$1 = ((this.scm_ArrayBuffer__f_size0 + n) | 0);
    $s_scm_ResizableArray$class__ensureSize__scm_ResizableArray__I__V(this, n$1);
    x2.copyToArray__O__I__I__V(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n);
    this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + n) | 0);
    return this
  } else {
    return $as_scm_ArrayBuffer($s_scg_Growable$class__$plus$plus$eq__scg_Growable__sc_TraversableOnce__scg_Growable(this, xs))
  }
});
$c_scm_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer"
});
$c_scm_ArrayBuffer.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return $s_scm_ResizableArray$class__apply__scm_ResizableArray__I__O(this, idx)
});
$c_scm_ArrayBuffer.prototype.result__O = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer(xs)
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_ArrayBuffer(elem)
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_ArrayBuffer(elem)
});
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
var $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeqOptimized: 1,
  scm_IndexedSeqLike: 1,
  sc_IndexedSeqLike: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1,
  scm_ResizableArray: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_LDearHenry_Application__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=main.js.map
