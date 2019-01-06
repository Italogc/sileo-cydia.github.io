/*
most of the code here is writen by Timon Olsthoorn
Follow him on -
Github 	- https://github.com/tmnlsthrn
Twitter - @TimonOlsthoorn
*/

/* Lotus - iosver.js
 * Copyright (C) 2014-2015  Timon Olsthoorn (tmnlsthrn)
 */

/*
 *        源代码和二进制代码的重新分配和使用
 *允许修改或不修改表格。
 *前提是满足以下条件：
 *
 * 1。源代码的重新分发必须保留
 *以上版权声明，此条件列表
 *及以下免责声明。
 * 2。二进制形式的再分配必须复制
 *以上版权声明，此条件列表
 *以及文档中的以下免责声明
 *和/或提供的其他材料
 *分布。
 * 3。作者姓名不得用于署名。
 *或推广从本软件衍生的产品
 *未经事先明确书面许可。
 *
 *本软件由作者“原样”提供。
 *以及任何明示或暗示的保证，包括：
 *但不限于
 *适销性和特定用途的适用性
 *不予承认。在任何情况下，作者都不得
 *对任何直接、间接、偶然、特殊，
 *惩戒性或后果性损害（包括但不限于
 *不限于采购替代货物或
 *服务；使用、数据或利润损失；或业务
 *中断），但根据任何理论
 *责任，无论是合同责任、严格责任，或
 *侵权行为（包括疏忽或其他）产生于
 *不使用本软件的任何方法，即使
 *告知此类损坏的可能性.
 */

// Adapted from https://github.com/tmnlsthrn/Lotus/blob/master/js/iosver.js


// changed const to var for IE9/10 compatibity.
var VERSION_CHECK_SUPPORTED = "支持您的iOS版本! &#x1f60a;";
var VERSION_CHECK_NEEDS_UPGRADE = "不兼容您的系统.至少需要iOS %s &#x1f615;";
var VERSION_CHECK_UNCONFIRMED = "尚未在你当前的iOS上测试 %s &#x1f601;";
var VERSION_CHECK_UNSUPPORTED = "只是兼容 iOS %s to %s &#x1f61e;";

function ios_version_check(minIOS,maxIOS,otherIOS,callBack) {
	"use strict";


	function parseVersionString(version) {
		var bits = version.split(".");
		return [
				parseInt(bits[0], 10),
				parseInt(bits[1] ? bits[1] : 0, 10),
				parseInt(bits[2] ? bits[2] : 0, 10)
			   ];
	}

	function compareVersions(one, two) {
		// https://gist.github.com/TheDistantSea/8021359
		for (var i = 0; i < one.length; ++i) {
			if (two.length == i) {
				return 1;
			}

			if (one[i] == two[i]) {
				continue;
			} else if (one[i] > two[i]) {
				return 1;
			} else {
				return -1;
			}
		}

		if (one.length != two.length) {
			return -1;
		}

		return 0;
	}

	var version = navigator.appVersion.match(/CPU( iPhone)? OS (\d+)_(\d+)(_(\d+))? like/i);
	if (!version) {
		return 0;
	}

	var osVersion = [
						parseInt(version[2], 10),
						parseInt(version[3], 10),
						parseInt(version[4] ? version[5] : 0, 10)
					],

		osString = osVersion[0] + "." + osVersion[1] + (osVersion[2] && osVersion[2] != 0 ? "." + osVersion[2] : ""),
		minString = minIOS,
		maxString = maxIOS,

		minVersion = parseVersionString(minString),
		maxVersion = maxString ? parseVersionString(maxString) : null,

		message = VERSION_CHECK_SUPPORTED,
		isBad = false;

	if (compareVersions(minVersion, osVersion) == 1) {
		message = VERSION_CHECK_NEEDS_UPGRADE.replace("%s", minString);
		isBad = true;
	} else if (maxVersion && compareVersions(maxVersion, osVersion) == -1) {
		if ("unsupported" == otherIOS) {
			message = VERSION_CHECK_UNSUPPORTED.replace("%s", minString).replace("%s", maxString);
		} else {
			message = VERSION_CHECK_UNCONFIRMED.replace("%s", osString);
		}

		isBad = true;
	}
	callBack(message,isBad);

	return (isBad?-1:1);
}
