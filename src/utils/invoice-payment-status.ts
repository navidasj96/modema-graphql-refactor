export enum InvoicePaymentStatusEnum {
  PAID = 1,
  NOT_PAID = 2,
  CASH_ON_DELIVERY = 3,
  FREE = 4,
  TRANSFER_MONEY = 5,
  DIGIKALA_ORDERS = 6,
  REPLACEMENT_INVOICE = 7, // تعویضی/اصلاحیه
  DEPOT_WITHOUT_PAYMENT = 8,
  FOR_ADVERTISEMENT = 9, // سفارش جهت تبلیغات
  WITHOUT_PAYMENT = 10, // اعتباری(سابق) - تغییر داده شد به پدون پرداخت
  BY_CREDIT_WHOLESALE = 11, // اعتباری عمده
  PAID_WITH_WALLET = 12, // پرداخت کامل با کیف پول
  AZKI = 13, // پرداخت آنلاین درگاه ازکی
  EGHTESAD_NOVIN = 14, // پرداخت آنلاین درگاه اقتصاد نوین
  BA_SALAM_ORDERS = 15, // سفارش از طریق سایت باسلام
  SNAPPPAY = 16, // پرداخت آنلاین درگاه اسنپ پی
  WHOLESALE_FOR_EXPORT = 17, // اعتباری عمده جهت صادرات
  DIGIPAY_CREDIT = 19, // Digipay Installments By Credit
  DIGIPAY_BNPL = 20, // Digipay Buy Now Pay Later(in 1 payment or via 4 installments)
  ZARINPLUS = 21, // پرداخت آنلاین درگاه زرین پلاس
  TARA = 22, // پرداخت آنلاین درگاه زرین پلاس
}

export const ALL_WHOLESALE_PAYMENT_STATUSES: InvoicePaymentStatusEnum[] = [
  InvoicePaymentStatusEnum.BY_CREDIT_WHOLESALE,
  InvoicePaymentStatusEnum.WHOLESALE_FOR_EXPORT,
];
