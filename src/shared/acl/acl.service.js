"use strict";
exports.__esModule = true;
exports.BaseAclService = void 0;
var action_constant_1 = require("./action.constant");
var BaseAclService = /** @class */ (function () {
    function BaseAclService() {
        var _this = this;
        /**
         * ACL rules
         */
        this.aclRules = [];
        /**
         * create user specific acl object to check ability to perform any action
         */
        this.forActor = function (actor) {
            return {
                canDoAction: function (action, resource) {
                    var canDoAction = false;
                    actor.roles.forEach(function (actorRole) {
                        //If already has access, return
                        if (canDoAction)
                            return true;
                        //find all rules for given user role
                        var aclRules = _this.aclRules.filter(function (rule) { return rule.role === actorRole; });
                        //for each rule, check action permission
                        aclRules.forEach(function (aclRule) {
                            //If already has access, return
                            if (canDoAction)
                                return true;
                            //check action permission
                            var hasActionPermission = aclRule.actions.includes(action) ||
                                aclRule.actions.includes(action_constant_1.Action.Manage);
                            //check for custom `ruleCallback` callback
                            canDoAction =
                                hasActionPermission &&
                                    (!aclRule.ruleCallback || aclRule.ruleCallback(resource, actor));
                        });
                    });
                    return canDoAction;
                }
            };
        };
    }
    /**
     * Set ACL rule for a role
     */
    BaseAclService.prototype.canDo = function (role, actions, ruleCallback) {
        ruleCallback
            ? this.aclRules.push({ role: role, actions: actions, ruleCallback: ruleCallback })
            : this.aclRules.push({ role: role, actions: actions });
    };
    return BaseAclService;
}());
exports.BaseAclService = BaseAclService;
