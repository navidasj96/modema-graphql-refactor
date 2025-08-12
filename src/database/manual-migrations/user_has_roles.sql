/*
 Navicat Premium Dump SQL

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100432 (10.4.32-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : modema

 Target Server Type    : MySQL
 Target Server Version : 100432 (10.4.32-MariaDB)
 File Encoding         : 65001

 Date: 12/08/2025 10:27:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_has_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_has_roles`;
CREATE TABLE `user_has_roles`  (
  `user_id` int UNSIGNED NOT NULL,
  `role_id` int UNSIGNED NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE,
  INDEX `role_id`(`role_id` ASC) USING BTREE,
  CONSTRAINT `user_has_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `user_has_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_has_roles
-- ----------------------------
INSERT INTO `user_has_roles` VALUES (1, 1);
INSERT INTO `user_has_roles` VALUES (1, 2);
INSERT INTO `user_has_roles` VALUES (1, 3);
INSERT INTO `user_has_roles` VALUES (1, 4);
INSERT INTO `user_has_roles` VALUES (1, 8);
INSERT INTO `user_has_roles` VALUES (2, 1);
INSERT INTO `user_has_roles` VALUES (2, 2);
INSERT INTO `user_has_roles` VALUES (2, 3);
INSERT INTO `user_has_roles` VALUES (2, 4);
INSERT INTO `user_has_roles` VALUES (2, 8);
INSERT INTO `user_has_roles` VALUES (3, 13);
INSERT INTO `user_has_roles` VALUES (6, 1);
INSERT INTO `user_has_roles` VALUES (33, 1);
INSERT INTO `user_has_roles` VALUES (33, 4);
INSERT INTO `user_has_roles` VALUES (34, 6);
INSERT INTO `user_has_roles` VALUES (34, 8);
INSERT INTO `user_has_roles` VALUES (44, 3);
INSERT INTO `user_has_roles` VALUES (44, 16);
INSERT INTO `user_has_roles` VALUES (364, 1);
INSERT INTO `user_has_roles` VALUES (823, 1);
INSERT INTO `user_has_roles` VALUES (824, 1);
INSERT INTO `user_has_roles` VALUES (1100, 3);
INSERT INTO `user_has_roles` VALUES (1100, 13);
INSERT INTO `user_has_roles` VALUES (1731, 8);
INSERT INTO `user_has_roles` VALUES (1731, 13);
INSERT INTO `user_has_roles` VALUES (2113, 4);
INSERT INTO `user_has_roles` VALUES (2115, 4);
INSERT INTO `user_has_roles` VALUES (2198, 4);
INSERT INTO `user_has_roles` VALUES (32621, 1);
INSERT INTO `user_has_roles` VALUES (32621, 5);
INSERT INTO `user_has_roles` VALUES (154847, 7);
INSERT INTO `user_has_roles` VALUES (175968, 7);
INSERT INTO `user_has_roles` VALUES (201503, 5);
INSERT INTO `user_has_roles` VALUES (201503, 9);
INSERT INTO `user_has_roles` VALUES (205555, 9);
INSERT INTO `user_has_roles` VALUES (205555, 10);
INSERT INTO `user_has_roles` VALUES (208221, 6);
INSERT INTO `user_has_roles` VALUES (208221, 7);
INSERT INTO `user_has_roles` VALUES (208221, 8);
INSERT INTO `user_has_roles` VALUES (239646, 5);
INSERT INTO `user_has_roles` VALUES (254705, 7);
INSERT INTO `user_has_roles` VALUES (279197, 10);
INSERT INTO `user_has_roles` VALUES (372042, 6);
INSERT INTO `user_has_roles` VALUES (372042, 14);
INSERT INTO `user_has_roles` VALUES (379694, 7);
INSERT INTO `user_has_roles` VALUES (461660, 6);
INSERT INTO `user_has_roles` VALUES (493881, 5);
INSERT INTO `user_has_roles` VALUES (496122, 9);
INSERT INTO `user_has_roles` VALUES (546695, 6);
INSERT INTO `user_has_roles` VALUES (546695, 7);
INSERT INTO `user_has_roles` VALUES (546695, 8);
INSERT INTO `user_has_roles` VALUES (739126, 10);
INSERT INTO `user_has_roles` VALUES (775569, 3);
INSERT INTO `user_has_roles` VALUES (775569, 6);
INSERT INTO `user_has_roles` VALUES (775569, 17);
INSERT INTO `user_has_roles` VALUES (775901, 13);
INSERT INTO `user_has_roles` VALUES (912219, 8);
INSERT INTO `user_has_roles` VALUES (912219, 13);
INSERT INTO `user_has_roles` VALUES (1076415, 1);
INSERT INTO `user_has_roles` VALUES (1076415, 6);
INSERT INTO `user_has_roles` VALUES (1109130, 5);
INSERT INTO `user_has_roles` VALUES (1109130, 6);
INSERT INTO `user_has_roles` VALUES (1109130, 7);
INSERT INTO `user_has_roles` VALUES (1109130, 14);
INSERT INTO `user_has_roles` VALUES (1109130, 16);
INSERT INTO `user_has_roles` VALUES (1147728, 6);
INSERT INTO `user_has_roles` VALUES (1176844, 3);
INSERT INTO `user_has_roles` VALUES (1176917, 3);
INSERT INTO `user_has_roles` VALUES (1177254, 6);
INSERT INTO `user_has_roles` VALUES (1178087, 6);
INSERT INTO `user_has_roles` VALUES (1182020, 6);
INSERT INTO `user_has_roles` VALUES (1182020, 14);
INSERT INTO `user_has_roles` VALUES (1188657, 3);
INSERT INTO `user_has_roles` VALUES (1188657, 8);
INSERT INTO `user_has_roles` VALUES (1199739, 6);
INSERT INTO `user_has_roles` VALUES (1199739, 7);
INSERT INTO `user_has_roles` VALUES (1207954, 6);
INSERT INTO `user_has_roles` VALUES (1305768, 13);
INSERT INTO `user_has_roles` VALUES (1327272, 5);
INSERT INTO `user_has_roles` VALUES (1327272, 6);
INSERT INTO `user_has_roles` VALUES (1327272, 10);
INSERT INTO `user_has_roles` VALUES (1327272, 14);
INSERT INTO `user_has_roles` VALUES (1332355, 10);
INSERT INTO `user_has_roles` VALUES (1338932, 10);
INSERT INTO `user_has_roles` VALUES (1348585, 6);
INSERT INTO `user_has_roles` VALUES (1358951, 6);
INSERT INTO `user_has_roles` VALUES (1358951, 7);
INSERT INTO `user_has_roles` VALUES (1358951, 8);
INSERT INTO `user_has_roles` VALUES (1365436, 6);
INSERT INTO `user_has_roles` VALUES (1365436, 14);
INSERT INTO `user_has_roles` VALUES (1388339, 6);
INSERT INTO `user_has_roles` VALUES (1388339, 14);
INSERT INTO `user_has_roles` VALUES (1422196, 5);
INSERT INTO `user_has_roles` VALUES (1436484, 6);
INSERT INTO `user_has_roles` VALUES (1436891, 15);
INSERT INTO `user_has_roles` VALUES (1437943, 6);
INSERT INTO `user_has_roles` VALUES (1573923, 7);
INSERT INTO `user_has_roles` VALUES (1602746, 6);
INSERT INTO `user_has_roles` VALUES (1611722, 1);
INSERT INTO `user_has_roles` VALUES (1624995, 6);
INSERT INTO `user_has_roles` VALUES (1624995, 14);
INSERT INTO `user_has_roles` VALUES (1679044, 6);
INSERT INTO `user_has_roles` VALUES (1679044, 14);
INSERT INTO `user_has_roles` VALUES (1752506, 7);
INSERT INTO `user_has_roles` VALUES (1988917, 6);
INSERT INTO `user_has_roles` VALUES (1988917, 14);
INSERT INTO `user_has_roles` VALUES (2014187, 6);
INSERT INTO `user_has_roles` VALUES (2014187, 14);
INSERT INTO `user_has_roles` VALUES (2075606, 16);
INSERT INTO `user_has_roles` VALUES (2104172, 13);
INSERT INTO `user_has_roles` VALUES (2130765, 17);
INSERT INTO `user_has_roles` VALUES (2131397, 3);
INSERT INTO `user_has_roles` VALUES (2147392, 6);
INSERT INTO `user_has_roles` VALUES (2147392, 14);
INSERT INTO `user_has_roles` VALUES (2398589, 5);
INSERT INTO `user_has_roles` VALUES (2421650, 5);
INSERT INTO `user_has_roles` VALUES (2421650, 10);
INSERT INTO `user_has_roles` VALUES (2424570, 17);
INSERT INTO `user_has_roles` VALUES (2512723, 13);
INSERT INTO `user_has_roles` VALUES (2540589, 17);
INSERT INTO `user_has_roles` VALUES (2554043, 6);
INSERT INTO `user_has_roles` VALUES (2554043, 14);
INSERT INTO `user_has_roles` VALUES (2567661, 6);
INSERT INTO `user_has_roles` VALUES (2567661, 14);
INSERT INTO `user_has_roles` VALUES (2568147, 6);
INSERT INTO `user_has_roles` VALUES (2568147, 7);
INSERT INTO `user_has_roles` VALUES (2570231, 1);
INSERT INTO `user_has_roles` VALUES (2572714, 13);
INSERT INTO `user_has_roles` VALUES (2576001, 13);
INSERT INTO `user_has_roles` VALUES (2576492, 6);
INSERT INTO `user_has_roles` VALUES (2576492, 14);
INSERT INTO `user_has_roles` VALUES (2580239, 1);
INSERT INTO `user_has_roles` VALUES (2581733, 6);
INSERT INTO `user_has_roles` VALUES (2581733, 14);
INSERT INTO `user_has_roles` VALUES (2587623, 6);
INSERT INTO `user_has_roles` VALUES (2587623, 14);
INSERT INTO `user_has_roles` VALUES (2589537, 5);
INSERT INTO `user_has_roles` VALUES (2589537, 10);
INSERT INTO `user_has_roles` VALUES (2589902, 16);
INSERT INTO `user_has_roles` VALUES (2590260, 6);
INSERT INTO `user_has_roles` VALUES (2590260, 14);
INSERT INTO `user_has_roles` VALUES (2590731, 17);
INSERT INTO `user_has_roles` VALUES (2594672, 6);
INSERT INTO `user_has_roles` VALUES (2602499, 6);
INSERT INTO `user_has_roles` VALUES (2602509, 5);
INSERT INTO `user_has_roles` VALUES (2621705, 6);
INSERT INTO `user_has_roles` VALUES (2621705, 14);
INSERT INTO `user_has_roles` VALUES (2720754, 1);

SET FOREIGN_KEY_CHECKS = 1;
