export enum InvoicePaymentStatusEnum {
  PAID = 1 as number,
  NOT_PAID = 2 as number,
  CASH_ON_DELIVERY = 3 as number,
  FREE = 4 as number,
  TRANSFER_MONEY = 5 as number,
  DIGIKALA_ORDERS = 6 as number,
  REPLACEMENT_INVOICE = 7 as number, // تعویضی/اصلاحیه
  DEPOT_WITHOUT_PAYMENT = 8 as number,
  FOR_ADVERTISEMENT = 9 as number, // سفارش جهت تبلیغات
  WITHOUT_PAYMENT = 10 as number, // اعتباری(سابق) - تغییر داده شد به پدون پرداخت
  BY_CREDIT_WHOLESALE = 11 as number, // اعتباری عمده
  PAID_WITH_WALLET = 12 as number, // پرداخت کامل با کیف پول
  AZKI = 13 as number, // پرداخت آنلاین درگاه ازکی
  EGHTESAD_NOVIN = 14 as number, // پرداخت آنلاین درگاه اقتصاد نوین
  BA_SALAM_ORDERS = 15 as number, // سفارش از طریق سایت باسلام
  SNAPPPAY = 16 as number, // پرداخت آنلاین درگاه اسنپ پی
  WHOLESALE_FOR_EXPORT = 17 as number, // اعتباری عمده جهت صادرات
  DIGIPAY_CREDIT = 19 as number, // Digipay Installments By Credit
  DIGIPAY_BNPL = 20 as number, // Digipay Buy Now Pay Later(in 1 payment or via 4 installments)
  ZARINPLUS = 21 as number, // پرداخت آنلاین درگاه زرین پلاس
  TARA = 22 as number, // پرداخت آنلاین درگاه زرین پلاس
}

export const ALL_WHOLESALE_PAYMENT_STATUSES: InvoicePaymentStatusEnum[] = [
  InvoicePaymentStatusEnum.BY_CREDIT_WHOLESALE,
  InvoicePaymentStatusEnum.WHOLESALE_FOR_EXPORT,
];
