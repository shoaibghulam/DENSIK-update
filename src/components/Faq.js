import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Faqitem from './Faqitem';
export default function Faq() {
    return (
        <>
        

<Accordion className="faq-accordion">
 <Faqitem
 id="1"
 question="How many Babies will there be?"
 anwser="There will only ever be 8,888 Babies minted for this collection."
 />

 <Faqitem
 id="2"
 question="How much will it cost to mint a Baby?"
 anwser="Babies are available to be minted at a price of 0.04 ETH per."
 />

 <Faqitem
 id="3"
 question="What is the maximum amount of Babies I can mint?"
 anwser="There is a limit of 4 Babies per transaction."
 />

 <Faqitem
 id="4"
 question="How do we mint a Baby, and how will the release be fair?"
 anwser="You will only be able to mint directly via our website (will be posted soon). There will be a small, simple challenge on the website before purchase to add fairness. 
 "
 />
 
 <Faqitem
 id="5"
 question="What chain are Royal Babies hosted on?"
 anwser="Royal Babies are an Immutable X (Ethereum)-based NFT collection."
 />

 <Faqitem
 id="6"
 question="How can I get whitelisted?"
 anwser="New members will be added to the whitelist daily - show support in the Discord & help spread the word on Twitter to help your chances of being added!"
 />

 <Faqitem
 id="66"
 question="How many people will be added to the whitelist in total, and how many Babies can they buy?"
 anwser="There will be 400 whitelisted members, each being able to purchase up to 2 Babies."
 />

 <Faqitem
 id="7"
 question="When is the official release?"
 anwser="We will be publishing both the pre-sale for whitelisted members, and the official public release dates soon, stay tuned. We plan for mid November. "
 />

 <Faqitem
 id="8"
 question="What inspired you to make the Royal Baby collection?"
 anwser="We want a community that is strong and will be better than the other communities. We are building a launchpad to help take underground artists and help them promote their NFT's through us. This will help our members be successful in their own projects. "
 />

 <Faqitem
 id="9"
 question="Are the Babies generated, or hand-drawn?"
 anwser="The majority of the babies will be generated with unique traits/rarities. Aside from this, there will also be 8 fully hand-drawn special edition Royal Babies. "
 />

 <Faqitem
 id="10"
 question=" I have a suggestion for the project, am I able to let you guys know?"
 anwser="Of course, we would love to hear any feedback or suggestions, and will try to address/implement as many as we can! Head to community-suggestions section in our discord."
 />

 <Faqitem
 id="11"
 question="I still have a question not answered in this FAQ, how can I find out?"
 anwser="Head over to our discord and ask away. We will be sure to address any questions as soon as we're able to!"
 />




</Accordion>
        </>
    )
}
