import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("empty", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items).to.deep.equal([]);
  });

  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
    expect(items[0].sellIn).to.equal(-1);
  });

  test("foo quality", () => {
    const gildedRose = new Shop([
      new Item("foo", 100, 110),
      new Item("foo", 0, 5),
      new Item("foo", -1, -1),
      new Item("foo", -1, 0),
      new Item("foo", -1, 1),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(109);
    expect(items[0].sellIn).to.equal(99);
    expect(items[1].quality).to.equal(3);
    expect(items[1].sellIn).to.equal(-1);
    expect(items[2].quality).to.equal(-1);
    expect(items[2].sellIn).to.equal(-2);
    expect(items[3].quality).to.equal(0);
    expect(items[3].sellIn).to.equal(-2);
    expect(items[4].quality).to.equal(0);
    expect(items[4].sellIn).to.equal(-2);
  });

  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 51),
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 51),
      new Item("Backstage passes to a TAFKAL80ETC concert", 100, 100),
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1),
      new Item("Backstage passes to a TAFKAL80ETC concert", 50, 6),
      new Item("Backstage passes to a TAFKAL80ETC concert", 49, 5),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 47),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 47),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, -1),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 1),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
    expect(items[1].quality).to.equal(51);
    expect(items[2].quality).to.equal(51);
    expect(items[3].quality).to.equal(100);
    expect(items[4].quality).to.equal(4);
    expect(items[5].quality).to.equal(7);
    expect(items[6].quality).to.equal(6);
    expect(items[7].quality).to.equal(50);
    expect(items[8].quality).to.equal(50);
    expect(items[9].quality).to.equal(49);
    expect(items[10].quality).to.equal(49);
    expect(items[11].quality).to.equal(50);
    expect(items[12].quality).to.equal(50);
    expect(items[13].quality).to.equal(49);
    expect(items[14].quality).to.equal(50);
    expect(items[15].quality).to.equal(0);
    expect(items[16].quality).to.equal(0);
    expect(items[17].quality).to.equal(0);

    expect(items[0].sellIn).to.equal(10);
    expect(items[1].sellIn).to.equal(9);
    expect(items[2].sellIn).to.equal(0);
    expect(items[3].sellIn).to.equal(99);
    expect(items[4].sellIn).to.equal(0);
    expect(items[5].sellIn).to.equal(49);
    expect(items[6].sellIn).to.equal(48);
    expect(items[7].sellIn).to.equal(9);
    expect(items[8].sellIn).to.equal(4);
    expect(items[15].sellIn).to.equal(-2);
    expect(items[16].sellIn).to.equal(-2);
    expect(items[17].sellIn).to.equal(-2);
  });

  test("Aged Brie", () => {
    const gildedRose = new Shop([
      new Item("Aged Brie", 51, 51),
      new Item("Aged Brie", 50, 50),
      new Item("Aged Brie", 1, 1),
      new Item("Aged Brie", -1, -1),
      new Item("Aged Brie", -1, 0),
      new Item("Aged Brie", -1, 1),
      new Item("Aged Brie", -1, 51),
      new Item("Aged Brie", -1, 50),
      new Item("Aged Brie", -1, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(50);
    expect(items[0].quality).to.equal(51);
    expect(items[1].sellIn).to.equal(49);
    expect(items[1].quality).to.equal(50);
    expect(items[2].sellIn).to.equal(0);
    expect(items[2].quality).to.equal(2);
    expect(items[3].sellIn).to.equal(-2);
    expect(items[3].quality).to.equal(1);
    expect(items[4].sellIn).to.equal(-2);
    expect(items[4].quality).to.equal(2);
    expect(items[5].sellIn).to.equal(-2);
    expect(items[5].quality).to.equal(3);
    expect(items[6].quality).to.equal(51);
    expect(items[7].quality).to.equal(50);
    expect(items[8].quality).to.equal(50);
  });

  test("Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 5, 5),
      new Item("Sulfuras, Hand of Ragnaros", -1, -1),
      new Item("Sulfuras, Hand of Ragnaros", -1, 0),
      new Item("Sulfuras, Hand of Ragnaros", -1, 1),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(0);
    expect(items[1].sellIn).to.equal(5);
    expect(items[1].quality).to.equal(5);
    expect(items[2].sellIn).to.equal(-1);
    expect(items[2].quality).to.equal(-1);
    expect(items[3].sellIn).to.equal(-1);
    expect(items[3].quality).to.equal(0);
    expect(items[4].sellIn).to.equal(-1);
    expect(items[4].quality).to.equal(1);
  });

  test('Conjured', () => {
    const gildedRose = new Shop([
      new Item("Conjured", 10, 10)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).to.equal(9)
    expect(items[0].quality).to.equal(8)
  })
});
