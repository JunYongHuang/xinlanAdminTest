/**
 * 后台管理模块存放常量的js
 */
var host = window.location.host;
var domain = window.location.hostname;
// 后台ajax基准地址
var ajaxRootURL = "http://"+host+"/xinlan";
// 图片基准地址
var imgRootURL = "http://" + domain + ":11001/images";
// 后台上传图片基准地址
var fileUploadRootURL = "http://"+host+"/upload";

// 图文直播后台头图上传地址
var fileUploadHotTopimgURL = fileUploadRootURL + "/hots";

// 投票后台ajax地址
var ajaxVoteURL = ajaxRootURL + "/votes";
// 投票后台上传图片地址
var fileUploadVoteURL = fileUploadRootURL + "/votes";
// 投票图片地址
var imgVoteURL = imgRootURL+ "/votes";

// 问答后台ajax地址
var ajaxQuizURL = ajaxRootURL + "/quiz";
// 问答后台上传图片地址
var fileUploadQuizURL = fileUploadRootURL + "/quiz";