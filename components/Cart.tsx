import Image from "next/image";

type Props = {};

export default function Cart({}: Props) {
  return (
    <div>
      <div className=" bg-white relative w-[350px] lg:w-[300px] border h-[180px] lg:h-[350px] border-red-500 transition-all duration-300">
        <Image
          src={`${process.env.IMAGE_KIT_URL}/natural1.jpg`}
          className=" object-cover"
          fill
          alt="Natural-image"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjoEAABXRUJQVlA4IC4EAAAwJwCdASosAdAAPm0ulUivNySiIxC8GuANiWdu4DkqRHAGMpTK7B3pb7Gbx7kDyhf/HrdxQVbaBTAa/9XlA6ABAcV7K1Hv0LsQs60DG6wPELbR6NlzCE52uANhjyrNlrXWGxoU7omzgakup2MjXofC0fFQ9zlxmrjNQ+tn/kSeMci5yG5bPTA/Kf+Orp8QT5/zf/d/QMsZsXvT3anCVP/LiGlpLxXLfesv/3KW/IpOq0h////zr6TD6srwGQrBnj//yMon3oDyEvgJzh1jlxUmuPl3PXP+6MdtHeGzU6DpV22VKasmHBSq94Jd4p4Df+18E+MCPdcOgYs67m8IE8O+xDyYICxAyazNB5OyN1AMb67VS2KqOXJxQXsZcoxbKgAOl48yV6jqOao8BIna2AGQhYoQ68cCIkQ/h6QMiD5DUPgAAP7jUzOZ0ccH8luT+nJQ+YN+5dWrV7jpUJdVO2R2yjzd31GbTX31jfr4aCtDu+GAqHuwkIbjiL0kFhhoKT8dtcZf1l6RhG4JgFgFxbgN02HFkwVqcoHoCH8A0iGF2sdwMzO1cMOPmWjFerjCcQ2JlNxJWivKWyUCKxxx7AzCFoPGSnqynLStYso6TopMwLL5BCDtIobnHAsFsq9ol7bLASp/lLFy4OZ6fF8Jzzgv7fxS9SPFUu0SOQkhtxCRD/enZ+8+36MLmBm9cSSnD7z/tlp4hExXBf8U35Oi+JOEceLGn8Ivc5ZdoVd92pMb9sd2fpdVNv+ykJ8iivsSFA+Ala0qamBvsA55xd6JSWi5zrCfq0ebKIkMy44mNLRF0f3eE7TE1DbrOxVNgX0YVmr5FqpVTcVIEoIiIxhX2D1zTA4Cvg9xq3u85rbA9NOU/P8HvlwYHpvzASOfxnL9dM/LyJ5iz7eES7wzbzu+0EnkJQSEVMViLD38NmU1Z/PvZiZoF0ijmLZsSNWGssTc6jek5gLvOAXxMKdumJTkBhNUEP9HCqDRLYSCtVGtj2RiTozxgDCdb3WXe8bxN1HfgOmtjIn6UDEMr2tZMq0P7M8Aa+44m3mekN+QlLipvdEx+tCedAko1YxfSPWX7bKNIq+liIcVQTaH9Bv5T0SVopT7keEOVmxPUXXfT/FyFj4/agYxy8FGuHIhNAnzQLVQjKxImVT4S9p8EZCv9bCYCWf/wLMkRv4veBj15UP06pkzWnJ74eYTLoes++Kh3UcxNoR+BkCwBJD3Hd75mXhpwaDUTArcxeBH9rM9OntQu12ypaDdsRu2YIcSS1qN7+6vP8pIAl6QKfFzrZm3JU5JWOcBAVGntvn5b2QAtGj6jSa3sKwxqBoZsR0vjg7/FjAd9pT6EfLbHuGQiZQ3af+gktzQ3BPVpzujFK399Nsb0JyxodshMheI6TKo/L9kQYizW2kUC5DeO1w2/qHGyYAAAA=="
        />
      </div>
      <div className=" border border-blue-500">
        <h2>Cart Item</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          itaque dicta illum perferendis deleniti totam excepturi ab libero
          error dolorem.
        </p>
      </div>
    </div>
  );
}
