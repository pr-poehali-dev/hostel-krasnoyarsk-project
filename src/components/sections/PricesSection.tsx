import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricesSection = () => {
  const mealPlans = [
    {
      type: 'Двухразовое питание',
      meals: ['Завтрак', 'Ужин'],
      price: '900 ₽/день',
      menu: 'Домашняя кухня с горячими блюдами'
    },
    {
      type: 'Трёхразовое питание',
      meals: ['Завтрак', 'Обед', 'Ужин'],
      price: '1100 ₽/день',
      menu: 'Полноценное питание с первыми и вторыми блюдами'
    }
  ];

  return (
    <section id="prices" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Цены и питание</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный пансион с домашней кухней
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardHeader className="bg-secondary/20">
                <CardTitle className="text-3xl text-center">Проживание</CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">900 ₽</div>
                  <p className="text-muted-foreground">койко-место / сутки</p>
                </div>
                <div className="border-t pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">850 ₽</div>
                    <p className="text-muted-foreground">при проживании более 7 дней</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                  <p className="text-sm">Чистое постельное белье и полотенце</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Bath" className="text-primary mt-1" size={20} />
                  <p className="text-sm">Собственный туалет и душ в номере</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {mealPlans.map((plan, index) => (
                <Card key={index} className="border-2">
                  <CardHeader className="bg-accent/10">
                    <CardTitle className="text-2xl">{plan.type}</CardTitle>
                    <CardDescription className="text-lg">{plan.menu}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-primary">{plan.price}</div>
                      <div className="flex gap-2">
                        {plan.meals.map((meal, i) => (
                          <span key={i} className="px-3 py-1 bg-secondary/30 rounded-full text-sm">
                            {meal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="example-menu">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Icon name="Utensils" className="text-primary" />
                      Примерное меню
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div>
                      <h4 className="font-semibold mb-2">Завтрак</h4>
                      <p className="text-muted-foreground">Каша, яйца, выпечка, чай/кофе</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Обед</h4>
                      <p className="text-muted-foreground">Суп, второе блюдо, гарнир, компот, хлеб</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ужин</h4>
                      <p className="text-muted-foreground">Горячее блюдо, салат, выпечка, чай, хлеб</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground italic">Меню обновляется каждый день</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
