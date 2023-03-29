"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserAclService = void 0;
var common_1 = require("@nestjs/common");
var acl_service_1 = require("../../shared/acl/acl.service");
var role_constant_1 = require("./../../auth/constants/role.constant");
var action_constant_1 = require("./../../shared/acl/action.constant");
var UserAclService = /** @class */ (function (_super) {
    __extends(UserAclService, _super);
    function UserAclService() {
        var _this = _super.call(this) || this;
        // Admin can do all action
        _this.canDo(role_constant_1.ROLE.ADMIN, [action_constant_1.Action.Manage]);
        //user can read himself or any other user
        _this.canDo(role_constant_1.ROLE.USER, [action_constant_1.Action.Read]);
        // user can only update himself
        _this.canDo(role_constant_1.ROLE.USER, [action_constant_1.Action.Update], _this.isUserItself);
        return _this;
    }
    UserAclService.prototype.isUserItself = function (resource, actor) {
        return resource.id === actor.id;
    };
    UserAclService = __decorate([
        (0, common_1.Injectable)()
    ], UserAclService);
    return UserAclService;
}(acl_service_1.BaseAclService));
exports.UserAclService = UserAclService;
