/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        {/* hiddenMobile missing */}
        <Text color="icon_purple" sx={{fontSize:64, position:"absolute", left:"25%", top:"75%"}}>1</Text>
        <Text color="icon_orange" sx={{fontSize:48, position:"absolute", left:"10%", top:"10%"}}>0</Text>
        <Text color="icon_darker" sx={{fontSize:6, position:"absolute", left:"60%", top:"15%"}}>0</Text>
      </UpDown>
      <UpDownWide>
        <Text color="icon_red" sx={{fontSize:48, position:"absolute", left:"60%", top:"50%"}}>1</Text>
        <Text color="icon_blue" sx={{fontSize:16, position:"absolute", left:"90%", top:"25%"}}>0</Text> 
        <Text color="icon_brightest" sx={{fontSize:12, position:"absolute", left:"90%", top:"50%"}}>0</Text>
        <Text color="icon_darker" sx={{fontSize:16, position:"absolute", left:"70%", top:"90%"}}>1</Text>
        <Text color="icon_darkest" sx={{fontSize:16, position:"absolute", left:"30%", top:"65%"}}>0</Text>
        <Text color="icon_pink" sx={{fontSize:16, position:"absolute", left:"28%", top:"15%"}}>0</Text>
        <Text color="icon_darkest" sx={{fontSize:6, position:"absolute", left:"75%", top:"10%"}}>1</Text>
        <Text color="icon_darkest" sx={{fontSize:8, position:"absolute", left:"45%", top:"10%"}}>1</Text>
      </UpDownWide>
      <Text color="icon_darker" sx={{fontSize:24, position:"absolute", left:"15%", top:"70%"}}>0</Text>
      <Text color="icon_darkest" sx={{fontSize:6, position:"absolute", left:"4%", top:"80%"}}>1</Text>
      <Text color="icon_darkest" sx={{fontSize:12, position:"absolute", left:"50%", top:"60%"}}>0</Text>
      <Text color="icon_darkest" sx={{fontSize:8, position:"absolute", left:"95%", top:"90%"}}>1</Text>
      <Text color="icon_darker" sx={{fontSize:24, position:"absolute", left:"40%", top:"80%"}}>0</Text>
      <Text color="icon_darker" sx={{fontSize:8, position:"absolute", left:"25%", top:"5%"}}>1</Text>
      <Text color="icon_green" sx={{fontSize:64, position:"absolute", left:"95%", top:"5%"}}>0</Text>
      <Text color="icon_darkest" sx={{fontSize:6, position:"absolute", left:"50%", top:"90%"}}>0</Text>
      <Text color="icon_darkest" sx={{fontSize:12, position:"absolute", left:"40%", top:"30%"}}>1</Text>
      <Text color="icon_darker" sx={{fontSize:16, position:"absolute", left:"10%", top:"50%"}}>0</Text>
      <Text color="icon_darker" sx={{fontSize:8, position:"absolute", left:"80%", top:"70%"}}>1</Text>
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro/>
      </Inner>
    </Content>
  </div>
)

export default Hero