export enum InvoiceProductStatusEnum {
  BEGIN_PRODUCTION = 1, // شروع تولید
  PRINT = 3, // چاپ
  HEAT = 5, // چاپ و هیت سابق - هیت جدید
  PRINT_QUALITY_CONTROL = 7, // کنترل  کیفیت چاپ و هیت

  CUTTING = 10, // برش
  EDGE_OVERCASTING = 15, // دوردوزی
  //	 FINAL_QUALITY_CONTROL = 18, // کنترل کیفیت نهایی
  SHAGGY_BORDER_TAPING = 18, // نواردوزی شگی
  //	 PACKAGING = 20, // بسته بندی
  APPLY_PVC_LABEL = 20, // دوخت لیبل PVC (ژله ای)
  PRODUCTION_COMPLETED = 25, // تکمیل تولید
  RECEIVED_BY_REPOSITORY_DEPARTMENT = 27, // تحویل انبار گردید
  EXITED_FROM_REPOSITORY = 29, // خروج از انبار
  CANCELED = 30, // کنسل شده
  DAMAGED_DURING_PRODUCTION = 35, // معیوبی حین تولید

  BEGIN_PRODUCTION_STEP = 1, // شروع تولید
  PRINT_STEP = 2, // چاپ
  HEAT_STEP = 3, // هیت
  PRINT_QUALITY_CONTROL_STEP = 4, // کنترل  کیفیت چاپ و هیت
  CUTTING_STEP = 5, // برش
  EDGE_OVERCASTING_STEP = 6, // دوردوزی
  //	 FINAL_QUALITY_CONTROL_STEP = 6, // کنترل کیفیت نهایی
  //	 PACKAGING_STEP = 6, // بسته بندی
  APPLY_PVC_LABEL_STEP = 8, // دوخت لیبل PVC (ژله ای)
  PRODUCTION_COMPLETED_STEP = 9, // تکمیل تولید
  RECEIVED_BY_REPOSITORY_STEP = 10, // تحویل انبار گردید
  EXITED_FROM_REPOSITORY_STEP = 11, // خروج از انبار
  CANCELED_STEP = 1000000, // کنسل شده
  DAMAGED_STEP = 1000001, // معیوبی حین تولید
}

export const INVOICE_PRODUCT_STATUSES_HEAT_AND_AFTER: InvoiceProductStatusEnum[] =
  [
    InvoiceProductStatusEnum.HEAT,
    InvoiceProductStatusEnum.PRINT_QUALITY_CONTROL,
    InvoiceProductStatusEnum.CUTTING,
    InvoiceProductStatusEnum.EDGE_OVERCASTING,
    InvoiceProductStatusEnum.APPLY_PVC_LABEL,
    InvoiceProductStatusEnum.PRODUCTION_COMPLETED,
    InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT,
    InvoiceProductStatusEnum.EXITED_FROM_REPOSITORY,
  ];
