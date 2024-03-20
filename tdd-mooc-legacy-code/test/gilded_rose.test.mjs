import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0), new Item("abc", 100, 110), new Item("foo", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].quality).to.equal(0);
    expect(items[0].sellIn).to.equal(-1);
    expect(items[1].quality).to.equal(109);
    expect(items[2].sellIn).to.equal(-1);
  });
  
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10), new Item("Backstage passes to a TAFKAL80ETC concert", 8, 10), new Item("Backstage passes to a TAFKAL80ETC concert", 1000, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[1].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[2].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).to.equal(13);
    expect(items[1].quality).to.equal(12);
    expect(items[2].quality).to.equal(100);
  });
});
