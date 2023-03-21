"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var ruleFormRef = (0, vue_1.ref)();
var checkAge = function (rule, value, callback) {
    if (!value) {
        return callback(new Error('Please input the age'));
    }
    setTimeout(function () {
        if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
        }
        else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'));
            }
            else {
                callback();
            }
        }
    }, 1000);
};
var validatePass = function (rule, value, callback) {
    if (value === '') {
        callback(new Error('Please input the password'));
    }
    else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value)
                return;
            ruleFormRef.value.validateField('checkPass', function () { return null; });
        }
        callback();
    }
};
var validatePass2 = function (rule, value, callback) {
    if (value === '') {
        callback(new Error('Please input the password again'));
    }
    else if (value !== ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
    }
    else {
        callback();
    }
};
var ruleForm = (0, vue_1.reactive)({
    pass: '',
    checkPass: '',
    age: ''
});
var rules = (0, vue_1.reactive)({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }]
});
var submitForm = function (formEl) {
    if (!formEl)
        return;
    formEl.validate(function (valid) {
        if (valid) {
            console.log('submit!');
        }
        else {
            console.log('error submit!');
            return false;
        }
    });
};
var resetForm = function (formEl) {
    if (!formEl)
        return;
    formEl.resetFields();
};
