export enum InvoiceProductStatusEnum {
  BEGIN_PRODUCTION = 1 as number, // شروع تولید
  PRINT = 3 as number, // چاپ
  HEAT = 5 as number, // چاپ و هیت سابق - هیت جدید
  PRINT_QUALITY_CONTROL = 7 as number, // کنترل  کیفیت چاپ و هیت

  CUTTING = 10 as number, // برش
  EDGE_OVERCASTING = 15 as number, // دوردوزی
  //	 FINAL_QUALITY_CONTROL = 18, // کنترل کیفیت نهایی
  SHAGGY_BORDER_TAPING = 18 as number, // نواردوزی شگی
  //	 PACKAGING = 20, // بسته بندی
  APPLY_PVC_LABEL = 20 as number, // دوخت لیبل PVC (ژله ای)
  PRODUCTION_COMPLETED = 25 as number, // تکمیل تولید
  RECEIVED_BY_REPOSITORY_DEPARTMENT = 27 as number, // تحویل انبار گردید
  EXITED_FROM_REPOSITORY = 29 as number, // خروج از انبار
  CANCELED = 30 as number, // کنسل شده
  DAMAGED_DURING_PRODUCTION = 35 as number, // معیوبی حین تولید

  BEGIN_PRODUCTION_STEP = 1 as number, // شروع تولید
  PRINT_STEP = 2 as number, // چاپ
  HEAT_STEP = 3 as number, // هیت
  PRINT_QUALITY_CONTROL_STEP = 4 as number, // کنترل  کیفیت چاپ و هیت
  CUTTING_STEP = 5 as number, // برش
  EDGE_OVERCASTING_STEP = 6 as number, // دوردوزی
  //	 FINAL_QUALITY_CONTROL_STEP = 6, // کنترل کیفیت نهایی
  //	 PACKAGING_STEP = 6, // بسته بندی
  APPLY_PVC_LABEL_STEP = 8 as number, // دوخت لیبل PVC (ژله ای)
  PRODUCTION_COMPLETED_STEP = 9 as number, // تکمیل تولید
  RECEIVED_BY_REPOSITORY_STEP = 10 as number, // تحویل انبار گردید
  EXITED_FROM_REPOSITORY_STEP = 11 as number, // خروج از انبار
  CANCELED_STEP = 1000000 as number, // کنسل شده
  DAMAGED_STEP = 1000001 as number, // معیوبی حین تولید
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
