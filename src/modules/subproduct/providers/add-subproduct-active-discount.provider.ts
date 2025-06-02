import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddSubproductActiveDiscountProvider {
  constructor() {}
  // این متد تخفیف های فعال subproduct را به object آن اضافه میکند - توضیحات لازم بیشتر در هر خط مورد نیاز نوشته می شود
  // دلیل نوشتن این متد این است که متد activeDiscount مدل فقط توانایی محاسبه تخفیف های مستقیم subproduct را دارد که با خود مدل بطور مستقیم relate شده باشند
  // حال اگر تخفیفی روی product آن یا کتگوری این محصول زده شده باشد، باید activeDiscount این subprodcut با تخفیف مربوط به product یا کتگوری های آن پر شود تا در کنترلرهای مربوطه در نظر گرفته شود

  async addSubproductActiveDiscount(subproduct: Subproduct, product: Product) {
    let activeDiscounts = [];
    // یک session در ابتدای کار چک می شود که اصلا بطور کلی discount فعالی در پنل وجود دارد یا خیر،
    // اگر وجود نداشته باشد اصلا نیازی به انجام عملیات بیشتر و کوئری زدن نیست و تخفیفی اعمال نمیشود
  }
}
