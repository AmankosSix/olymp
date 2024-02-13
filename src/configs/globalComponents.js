import Vue from "vue";
import BaseIcon from "@/components/CBaseIcon";
import customButtom from "@/components/Customs/button";
import customField from "@/components/Customs/field";
import CImg from "@/components/Customs/CImg";

Vue.component("v-field", customField);
Vue.component("base-icon", BaseIcon);
Vue.component("v-button", customButtom);
Vue.component("c-img", CImg);
