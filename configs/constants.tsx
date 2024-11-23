import { IsIPAD } from "@/themes/app.constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Image } from "react-native";
//@ts-ignore
import One from "@/assets/images/onboarding/1.png";
//@ts-ignore
import Two from "@/assets/images/onboarding/2.png";
//@ts-ignore
import Three from "@/assets/images/onboarding/3.png";

export const onBoardingSlides: onBoardingSlidesTypes[] = [
  {
    color: "#FFC107",
    title: "Explore",
    image: (
      <Image
        source={One}
        style={{
          width: IsIPAD ? verticalScale(285) : verticalScale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Our Community",
    subtitle: "Join our community and explore the world of music",
  },
  {
    color: "#FFC107",
    title: "Explore",
    image: (
      <Image
        source={Two}
        style={{
          width: IsIPAD ? scale(285) : scale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Our Community",
    subtitle: "Join our community and explore the world of music",
  },
  {
    color: "#FFC107",
    title: "Explore",
    image: (
      <Image
        source={Three}
        style={{
          width: IsIPAD ? scale(285) : scale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Our Community",
    subtitle: "Join our community and explore the world of music",
  },
];
