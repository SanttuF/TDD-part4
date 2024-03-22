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
            this.#decreaseQuality(i)
          }
        }
      } else {
        this.#increaseQuality(i);
        if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          if (this.items[i].sellIn < 11) {
            this.#increaseQuality(i);
          }
          if (this.items[i].sellIn < 6) {
            this.#increaseQuality(i);
          }
        }
      }

      this.#ageItem(i);
      this.#handleExpired(i)
    }

    return this.items;
  }

  #ageItem(i) {
    if (this.items[i].name == "Sulfuras, Hand of Ragnaros") return
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  #decreaseQuality(i) {
    if (this.items[i].name == "Sulfuras, Hand of Ragnaros") return
    if (this.items[i].quality <= 0) return
      this.items[i].quality = this.items[i].quality - 1;
  }

  #increaseQuality(i) {
    if (this.items[i].name == "Sulfuras, Hand of Ragnaros") return
    if (this.items[i].quality >= 50) return
    this.items[i].quality = this.items[i].quality + 1;
  }

  #handleExpired(i) {

    if (this.items[i].sellIn >= 0) {
      return
    }

    if (this.items[i].name == "Aged Brie") {
      this.#increaseQuality(i);
      return
    }

    if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
      this.items[i].quality = 0;
      return
    }

    this.#decreaseQuality(i);

  }
}
