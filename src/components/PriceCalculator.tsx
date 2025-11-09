import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const PriceCalculator = () => {
  const [furnitureType, setFurnitureType] = useState('sofa');
  const [material, setMaterial] = useState('fabric');
  const [size, setSize] = useState([200]);
  const [complexity, setComplexity] = useState('standard');

  const calculatePrice = () => {
    const basePrice = {
      sofa: 25000,
      table: 15000,
      bed: 30000,
      chair: 5000,
    }[furnitureType] || 25000;

    const materialMultiplier = {
      fabric: 1,
      leather: 1.5,
      wood_oak: 1.3,
      wood_walnut: 1.6,
    }[material] || 1;

    const sizeMultiplier = size[0] / 200;

    const complexityMultiplier = {
      simple: 0.8,
      standard: 1,
      premium: 1.4,
    }[complexity] || 1;

    const totalPrice = basePrice * materialMultiplier * sizeMultiplier * complexityMultiplier;
    return Math.round(totalPrice);
  };

  const price = calculatePrice();

  return (
    <Card className="border-0 shadow-2xl overflow-hidden">
      <CardHeader className="bg-primary text-primary-foreground p-8">
        <CardTitle className="text-3xl font-bold flex items-center gap-3">
          <Icon name="Calculator" size={32} />
          Калькулятор вартості
        </CardTitle>
        <p className="text-primary-foreground/80 mt-2">Розрахуйте приблизну вартість ваших меблів</p>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="space-y-4">
          <Label className="text-lg font-semibold text-primary">Тип меблів</Label>
          <RadioGroup value={furnitureType} onValueChange={setFurnitureType} className="grid grid-cols-2 gap-4">
            {[
              { value: 'sofa', label: 'Диван', icon: 'Armchair' },
              { value: 'table', label: 'Стіл', icon: 'Table' },
              { value: 'bed', label: 'Ліжко', icon: 'Bed' },
              { value: 'chair', label: 'Стілець', icon: 'PackageOpen' },
            ].map((item) => (
              <div key={item.value}>
                <RadioGroupItem value={item.value} id={item.value} className="peer sr-only" />
                <Label
                  htmlFor={item.value}
                  className="flex items-center gap-3 rounded-lg border-2 border-border bg-background p-4 hover:bg-accent/10 peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 cursor-pointer transition-all"
                >
                  <Icon name={item.icon} size={24} className="text-accent" />
                  <span className="font-medium">{item.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label className="text-lg font-semibold text-primary">Матеріал</Label>
          <RadioGroup value={material} onValueChange={setMaterial} className="grid grid-cols-2 gap-4">
            {[
              { value: 'fabric', label: 'Тканина', desc: 'Стандарт' },
              { value: 'leather', label: 'Шкіра', desc: '+50%' },
              { value: 'wood_oak', label: 'Дуб', desc: '+30%' },
              { value: 'wood_walnut', label: 'Горіх', desc: '+60%' },
            ].map((item) => (
              <div key={item.value}>
                <RadioGroupItem value={item.value} id={item.value} className="peer sr-only" />
                <Label
                  htmlFor={item.value}
                  className="flex flex-col rounded-lg border-2 border-border bg-background p-4 hover:bg-accent/10 peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 cursor-pointer transition-all"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-muted-foreground mt-1">{item.desc}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-semibold text-primary">Розмір</Label>
            <span className="text-lg font-bold text-accent">{size[0]} см</span>
          </div>
          <Slider
            value={size}
            onValueChange={setSize}
            min={100}
            max={400}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>100 см</span>
            <span>400 см</span>
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-lg font-semibold text-primary">Складність</Label>
          <RadioGroup value={complexity} onValueChange={setComplexity} className="grid grid-cols-3 gap-4">
            {[
              { value: 'simple', label: 'Проста', desc: '-20%' },
              { value: 'standard', label: 'Стандарт', desc: 'База' },
              { value: 'premium', label: 'Преміум', desc: '+40%' },
            ].map((item) => (
              <div key={item.value}>
                <RadioGroupItem value={item.value} id={item.value} className="peer sr-only" />
                <Label
                  htmlFor={item.value}
                  className="flex flex-col rounded-lg border-2 border-border bg-background p-4 hover:bg-accent/10 peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 cursor-pointer transition-all text-center"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-muted-foreground mt-1">{item.desc}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-primary">Орієнтовна вартість:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-accent">{price.toLocaleString('uk-UA')}</span>
              <span className="text-xl text-muted-foreground">грн</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            * Фінальна вартість визначається після консультації з дизайнером
          </p>
          <Button className="w-full bg-accent hover:bg-accent/90 text-primary text-lg py-6">
            <Icon name="Phone" size={20} className="mr-2" />
            Замовити консультацію
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-4">
          {[
            { icon: 'TrendingUp', text: 'Безкоштовний замір' },
            { icon: 'Wrench', text: 'Гарантія 5 років' },
            { icon: 'CreditCard', text: 'Розстрочка 0%' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon} size={20} className="text-accent" />
              </div>
              <span className="text-sm font-medium text-primary">{item.text}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
