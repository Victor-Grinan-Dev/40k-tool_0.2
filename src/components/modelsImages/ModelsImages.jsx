import React from "react";
// import image from "../../assets/space_wolves/ArjacRockfist.png";
// import ModelImg from "../modelmg/ModelImg";
import arjac from "../../assets/space_wolves/ArjacRockfist.png";
import bjorn from "../../assets/space_wolves/BjornFellhanded.png";
import bloodClaws from "../../assets/space_wolves/BloodClaws.png";
import cyberwolf from "../../assets/space_wolves/cyberwolf.png";
import fenrisianWolf from "../../assets/space_wolves/fenrisianWolf.png";
import canis_wolfborn from "../../assets/space_wolves/canis_wolfborn.png";
import greyHunters from "../../assets/space_wolves/greyHunters.png";
import haraldDeathwolf from "../../assets/space_wolves/haraldDeathwolf.png";
import ironPriest from "../../assets/space_wolves/ironPriest.png";
import droppod from "../../assets/space_wolves/droppod.png";
import kromDragongaze from "../../assets/space_wolves/kromDragongaze.png";
import lanraider from "../../assets/space_wolves/lanraider.png";
import liutenant from "../../assets/space_wolves/liutenant.png";
import loganGrimnar from "../../assets/space_wolves/loganGrimnar.png";
import loganStormrider from "../../assets/space_wolves/LoganStormrider.png";
import longFangs from "../../assets/space_wolves/longfangs.png";
import lucas from "../../assets/space_wolves/lucas.png";
import murderfang from "../../assets/space_wolves/murderfang.png";
import njal from "../../assets/space_wolves/njal.png";
import predator from "../../assets/space_wolves/predator.png";
import ragnar from "../../assets/space_wolves/ragnar.png";
import razorback from "../../assets/space_wolves/razorback.png";
import rhino from "../../assets/space_wolves/rhino.png";
import runePriest from "../../assets/space_wolves/runePriest.png";
import skyclaws from "../../assets/space_wolves/skyclaws.png";
import stormfang from "../../assets/space_wolves/stormfang.png";
import stromwolf from "../../assets/space_wolves/stromwolf.png";
import scouts from "../../assets/space_wolves/scouts.png";
import terminators from "../../assets/space_wolves/terminators.png";
import thunderwolfCavalry from "../../assets/space_wolves/ThunderwolfCavalry.png";
import ulrik from "../../assets/space_wolves/Ulrik.png";
import vendread from "../../assets/space_wolves/vendread.png";
import vindicator from "../../assets/space_wolves/vindicator.png";
import whirlwind from "../../assets/space_wolves/whirlwind.png";
import wolf_lord from "../../assets/space_wolves/wolf_lord.png";
import wolfguard__terminator_hammer from "../../assets/space_wolves/wolfguard__terminator_hammer.png";
import wolfguard_jumppack from "../../assets/space_wolves/wolfguard_jumppack.png";
import wolfguard_terminator_claws from "../../assets/space_wolves/wolfguard_terminator_claws.png";
import wolfguard from "../../assets/space_wolves/wolfguard.png";
import wolfguards_terminators from "../../assets/space_wolves/wolfguards_terminators.png";
import wolfguards from "../../assets/space_wolves/wolfguards.png";
import wolfguard_battle_leader_on_thunderwolf from "../../assets/space_wolves/wolfguard_battle_leader_on_thunderwolf.png";
import wolflord_thunderwolf from "../../assets/space_wolves/wolflord_thunderwolf.png";
import wolfpriestJumpack from "../../assets/space_wolves/wolfpriest-jumppack.png";
import wulfens from "../../assets/space_wolves/Wulfens.png";
import wulfen_dread from "../../assets/space_wolves/wulfen_dread.png";

const ModelsImages = ({ imgName, type }) => {
  const images = {
    arjac: arjac,
    bjorn: bjorn,
    bloodClaws: bloodClaws,
    cyberwolf: cyberwolf,
    fenrisianWolf: fenrisianWolf,
    canis_wolfborn: canis_wolfborn,
    greyHunters: greyHunters,
    haraldDeathwolf: haraldDeathwolf,
    ironPriest: ironPriest,
    droppod: droppod,
    kromDragongaze: kromDragongaze,
    lanraider: lanraider,
    liutenant: liutenant,
    loganGrimnar: loganGrimnar,
    loganStormrider: loganStormrider,
    longFangs: longFangs,
    lucas: lucas,
    murderfang: murderfang,
    njal: njal,
    predator: predator,
    ragnar: ragnar,
    razorback: razorback,
    rhino: rhino,
    runePriest: runePriest,
    skyclaws: skyclaws,
    stromwolf: stromwolf,
    scouts: scouts,
    terminators: terminators,
    thunderwolfCavalry: thunderwolfCavalry,
    ulrik: ulrik,
    vendread: vendread,
    vindicator: vindicator,
    whirlwind: whirlwind,
    stormfang: stormfang,
    wolf_lord: wolf_lord,
    wolfguard__terminator_hammer: wolfguard__terminator_hammer,
    wolfguard_jumppack: wolfguard_jumppack,
    wolfguard_terminator_claws: wolfguard_terminator_claws,
    wolfguard: wolfguard,
    wolfguards_terminators: wolfguards_terminators,
    wolfguards: wolfguards,
    wolfguard_battle_leader_on_thunderwolf:
      wolfguard_battle_leader_on_thunderwolf,
    wolflord_thunderwolf: wolflord_thunderwolf,
    wolfpriestJumpack: wolfpriestJumpack,
    wulfens: wulfens,
    wulfen_dread: wulfen_dread,
  };
  const imagesTypes = {
    listedModel: "my-models__card-image",
    unit: "model-card__image",
    selected: "modelCard__model-image",
    index: "indexCard__model-image",
  };
  return (
    <img src={images[imgName]} alt={imgName} className={imagesTypes[type]} />
  );
};

export default ModelsImages;
