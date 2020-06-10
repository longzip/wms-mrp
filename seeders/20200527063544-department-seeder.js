"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Departments",
      [
        {
          id: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3", //Nhà máy
          code: "TH",
          name: "NM Thuận Hưng",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*
      Xưởng nhà máy Thuận Hưng
      */
        {
          id: "609cb256-9852-41f8-b394-da2318fac7d1",
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng
          code: "TH.SLP",
          parentId: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          name: "Xưởng SLP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*
      Xưởng SLP
      */
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.SLP.LP",
          parentId: "609cb256-9852-41f8-b394-da2318fac7d1",
          name: "1.Tổ Lựa phôi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.SLP.SP",
          parentId: "609cb256-9852-41f8-b394-da2318fac7d1",
          name: "1.Tổ Sấy phôi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "a5871b90-09c6-445b-86ab-947761e5647d", //QC
          code: "TH.SLP.QC",
          parentId: "609cb256-9852-41f8-b394-da2318fac7d1",
          name: "QC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        /*
      Xưởng 1
      */

        {
          id: "a6c09014-b55a-444c-9e17-15652295a5e9",
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng
          code: "TH.X1",
          parentId: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          name: "Xưởng 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X1.LP",
          parentId: "a6c09014-b55a-444c-9e17-15652295a5e9",
          name: "1.Lựa phôi - X1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "2.VGT - X1",
          parentId: "a6c09014-b55a-444c-9e17-15652295a5e9",
          name: "2.VGT - X1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X1.TC1",
          parentId: "a6c09014-b55a-444c-9e17-15652295a5e9",
          name: "4.Tinh chế 1 - X1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X1.TC2",
          parentId: "a6c09014-b55a-444c-9e17-15652295a5e9",
          name: "4.Tinh chế 2 - X1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /*
      Xưởng 2
      */

        {
          id: "41f2532c-3295-4fdf-a607-f5bdaed2c616",
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng 2
          code: "TH.X2",
          parentId: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          name: "Xưởng 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X2.HTM1",
          parentId: "41f2532c-3295-4fdf-a607-f5bdaed2c616",
          name: "5.HTM1 - X2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X2.S1",
          parentId: "41f2532c-3295-4fdf-a607-f5bdaed2c616",
          name: "7.Sơn 1 - X2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X2.DG1",
          parentId: "41f2532c-3295-4fdf-a607-f5bdaed2c616",
          name: "8.Đóng gói 1 - X2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X2.HTM2",
          parentId: "41f2532c-3295-4fdf-a607-f5bdaed2c616",
          name: "5.HTM2- X2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X2.S2",
          parentId: "41f2532c-3295-4fdf-a607-f5bdaed2c616",
          name: "7.Sơn 2 - X2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X2.DG2",
          parentId: "41f2532c-3295-4fdf-a607-f5bdaed2c616",
          name: "8.Đóng gói 2 - X2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: "5790e542-480a-413b-8ed6-459af4f7b325",
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng 3
          code: "TH.X3",
          parentId: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          name: "Xưởng 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.LP",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "1.Lựa phôi - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.HTM",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "5.HTM - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.SC",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "3.Sơ chế - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.HTD",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "6.HTD - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.VGT",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "2.VGT - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.S",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "7.Sơn - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.TC1",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "4.Tinh chế 1 - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.TC2",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "4.Tinh chế 2 - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "TH.X3.DG",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "8.Đóng gói - X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eda55165-0e0b-4cf9-8bfe-9bb8c8a3af36", //Tổ
          code: "T.VA.SUA.HANG",
          parentId: "5790e542-480a-413b-8ed6-459af4f7b325",
          name: "Vá Sửa hàng - Tinh chế 1-X3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: uuidv4(),
          typeId: "eebbdb61-5c09-4f18-9350-2fce52106013", //Kho
          code: "TH.KP",
          parentId: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          name: "Kho phôi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eebbdb61-5c09-4f18-9350-2fce52106013", //Kho
          code: "TH.KTP",
          parentId: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          name: "Kho thành phẩm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eebbdb61-5c09-4f18-9350-2fce52106013", //Kho
          code: "TH.CONG",
          parentId: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          name: "Container",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "d27dbb0b-5469-4f49-b877-46e9ef8bb448", //Cơ điện
          code: "TH.CD",
          parentId: "04c899a4-9cac-45b3-b494-e79a747dbc38",
          name: "Cơ điện",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        /* NM CBG Yên Sơn */
        {
          id: "0e77641d-f161-404f-8a57-ef684f517b45",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "NMYS",
          name: "NM CBG Yên Sơn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng
          code: "YS.X.SAY",
          parentId: "0e77641d-f161-404f-8a57-ef684f517b45",
          name: "Xưởng Sấy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng
          code: "YS.X.3",
          parentId: "0e77641d-f161-404f-8a57-ef684f517b45",
          name: "Xưởng 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eebbdb61-5c09-4f18-9350-2fce52106013", //Kho
          code: "YS.K.P",
          parentId: "0e77641d-f161-404f-8a57-ef684f517b45",
          name: "Kho Phôi (Xưởng 4)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng
          code: "YS.X.5",
          parentId: "0e77641d-f161-404f-8a57-ef684f517b45",
          name: "Xưởng 5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng
          code: "YS.X.6",
          parentId: "0e77641d-f161-404f-8a57-ef684f517b45",
          name: "Xưởng 6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "3598d282-2a01-4105-b9d3-de0de105cad2", //Xưởng
          code: "YS.X.7",
          parentId: "0e77641d-f161-404f-8a57-ef684f517b45",
          name: "Xưởng 7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eebbdb61-5c09-4f18-9350-2fce52106013", //Kho
          code: "YS.T.QC",
          parentId: "0e77641d-f161-404f-8a57-ef684f517b45",
          name: "Kho Bán Thành Phẩm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          typeId: "eebbdb61-5c09-4f18-9350-2fce52106013", //Kho
          code: "YS",
          parentId: "0e77641d-f161-404f-8a57-ef684f517b45",
          name: "Kho Gỗ thô YS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        /** NM Quang Minh 1 */

        {
          id: "2b297aa4-e617-4bfb-9f41-549c178b737f",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "QM1",
          name: "NM Quang Minh 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "69a337f0-bfd7-4f9f-8ec9-d30d6c920f76",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "NH",
          name: "NM Nam Hồng",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "714184ad-aa42-4e40-8a34-35402450eaea",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "VH",
          name: "NM Việt Hà",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "75aa7477-cae5-425a-93e7-6e87d804f720",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "TB",
          name: "NM Thái Bình",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c5f41433-488c-48c1-9e44-aa96936111e5",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "GDYS",
          name: "NM Viforect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c97fcce8-215f-4f42-a216-15d7e5f42c64",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "TQ",
          name: "Tuyên Quang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d0e2bd07-f8ed-4b3a-9eb2-0465517a4472",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "VCN",
          name: "NM VCN Yên Sơn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f26a4b18-e38d-403b-80d7-f260c3c80e5b",
          typeId: "33db6c09-11f9-42ad-894d-9483c66f06e3",
          code: "HG",
          name: "Hà Giang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Departments", null, {});
  },
};
