/* 360° 導覽資料。每個房間一張 2:1 全景圖。
   yaw：左右角度（0 是正前方，往右是正數）；pitch：上下角度（往上是正數）。
   在導覽頁按「顯示角度」，把畫面中心對準門口，就能讀出熱點要填的數字。 */
window.VRTOURS = {
  forest: {
    title: "山林中的極簡靜居別墅",
    back: "index.html#forest-vr",
    start: "entry",
    scenes: [
      { id: "entry", title: "入口", image: "pano/forest-entry.jpg", yaw: 0,
        links: [{ to: "living", label: "進入客廳", yaw: -5, pitch: 8 }] },
      { id: "living", title: "客廳與閱讀區", image: "pano/forest-living.jpg", yaw: 0,
        links: [{ to: "corridor", label: "沿玻璃通道走", yaw: 30, pitch: 0 }, { to: "entry", label: "回到入口", yaw: -40, pitch: 0 }] },
      { id: "corridor", title: "玻璃通道", image: "pano/forest-corridor.jpg", yaw: 0,
        links: [{ to: "deck", label: "走到觀景平台", yaw: 0, pitch: 0 }, { to: "living", label: "回到客廳", yaw: -30, pitch: -5 }] },
      { id: "deck", title: "觀景平台", image: "pano/forest-deck.jpg", yaw: 0,
        links: [{ to: "living", label: "回到客廳", yaw: 30, pitch: 0 }] }
    ]
  },
  solo: {
    title: "獨白",
    back: "index.html#solo-vr",
    start: "court",
    scenes: [
      { id: "court", title: "中庭", image: "pano/solo-court.jpg", yaw: 0,
        links: [{ to: "living", label: "進入挑高客廳", yaw: -20, pitch: -5 }] },
      { id: "living", title: "挑高客廳", image: "pano/solo-living.jpg", yaw: 0,
        links: [{ to: "court", label: "走到中庭", yaw: -35, pitch: 0 }] }
    ]
  }
};
