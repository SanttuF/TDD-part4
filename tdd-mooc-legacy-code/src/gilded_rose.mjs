export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.#increaseQuality(i)
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.#increaseQuality(i)
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.#increaseQuality(i)
              }
            }
          }
        }
      }

      this.#ageItem(i)

      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.#decreaseQuality(i)
          }
        } else {
          if (this.items[i].quality < 50) {
            this.#increaseQuality(i)
          }
        }
      }
    }

    return this.items;
  }

  #ageItem(i) {
    if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }
  }
  
  #decreaseQuality(i) {
    this.items[i].quality = this.items[i].quality - this.items[i].quality;
  }

  #increaseQuality(i) {
    this.items[i].quality = this.items[i].quality + 1;
  }
}
