
/* 
  function ischeckeven (number){
    if (number%2==0) {
        console.log("num is even")
    } else {
        console.log("num is not even")
    } */

  
    /* ischeckeven(100);
    ischeckeven(101);
    ischeckeven(12); */
    /* function checkeven (num){
        return num%2==0 ? "num is even": "num is not even"
    }
    console.log(checkeven(9));
       */
     
    
     /*  function print10 () {
        for (let i=1;i<=9;i++) {
            if (i%2==0) {
                console.log("the even num between 1 to 10 is :",i);
            }
          }  

      }
        print10(); */
         
         /* function greet (name) {
             return ("hello:"+name+"!");
         }
          const greeting= greet("raj");
          console.log (greeting); */

           /* let myfruits = [ "apple","banana","mango","pomo","grapes","dry"];
           for (let i=0;i<myfruits.length;i++) {
            console.log(myfruits[i]);
        }
          const mynewfruits=  myfruits.slice(-3,4);
           console.log(myfruits)
            console.log(mynewfruits) */
             
             /* function findmin (arr) {
              const mynew = arr.sort();
              console.log(mynew[0]);
             }
              const arra= [7,3,5,7,8];
              console.log(arra)
              const strarr = ["orange","apple","king","grapes","pine"]
              findmin (arra);
              console.log(arra)
              findmin (strarr);
console.log(arra.reverse());
   */
    /* function countoccur (arr,value) {
      let count =0;
      for (let i=0;i<arr.length;i++) {
        if(arr[i]===value) {
          count++;
          
        }  
       
      }
      return count;
        
    }
      const arrm =[ 2,3,4,5,6,1,8,8,9,8,8


      ]
      const val = 8
     let result =countoccur (arrm,val);
     console.log(result);   */



     /* function findindex (arr,value) {
      
      for (let i=0;i<arr.length;i++) {
        if(arr[i]===value) {
          console.log(i)        
          
        }  
       
      }
    }
    const myarr = [1,2,3,4,5,6,5,5];
    findindex (myarr,1)
 */
   /* const myarr= [1,2,3,4,5]
     const mynewarr=myarr.splice(2,1,7,8,9)
     console.log(myarr);
     console.log(myarr.includes(7)); */
       
     /* const myarr=[1,2,3,4,5];
     const secarr=[6,7,8,9];
     const addarr=[...myarr,...secarr]
     console.log(addarr);
     
     function arrayloop (array) {
      for (let i=0;i<array.length;i++) {
        console.log(array[i]); 
      }
     }*/
       /* arrayloop(addarr); */
         
         /* const myarray = [1,2,3,4,5,6];
         const doubled= myarray.map((num)=>{
             return num*num
          })
          console.log (doubled);
            
          const myarray1=[1,3,7,8,-9-3-2,4];
           const result =myarray1.reduce( (acc,curr)=>{
                return acc+curr;
           },0)
            
           console.log (result); */
             
           /* const myarr = [1,2,3,4,5];
            const myarr2 = myarr.map ((n)=>{
                return n+n;
            })
            console.log(myarr2); */
             /*  function sum (arr) {
                return arr.reduce ( ( acc,num)=> acc+num ,0)

              }
                 const myarr=[1,2,3,4,5];
               let myresult = sum(myarr);
               console.log(myresult); */
                
               /* const myarra = [1,2,3,4,5,3,7,3,7];
            const myarr2 = myarra.filter ((n)=>{
                return n!==3;
            })
            console.log(myarr2);
            console.log(myarra);
               */
           /*  const myaarr= [ 1,[2,3],4,[2,[4,6],5]] ;
              const myarra2= myaarr.flat(Infinity);
            console.log(myarra2);
            console.log(myaarr);
             */
              
             /* node prac.js */
              /* function max (arr) {
                 const max=Math.min(...arr)
                 return max;
              } */
                /* const myarr = [1,4,8];
                let result = max (myarr);
                console.log(result);
                   */
                  /* function duplicates (arr) {
                    return arr.filter ( (value,index) => arr.indexOf(value)===index); */
                  
                 /*  const myarr = [1,4,8,8,9,4,5,,7,5];
                  let result= duplicates(myarr);
                  console.log(result);
 *//* 
                    const myarray1 = [1,2,3,4,5,6];
                   const myarray2= [...myarray1].reverse();
                    console.log(myarray1);
                    console.log(myarray2);
 */
       /* let mystr = "apple,banana,orange"
       const fruits = mystr.split('  ')
       console.log(fruits);
       let mystr2=fruits.join(' ');
       console.log(mystr2);
             */  

         /* function ispalindrome (str) {
          let mystr=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          let myarar=mystr.split('');
          let reversearr=myarar.reverse();
          let myrevestr=reversearr.join('');
          return mystr===myrevestr;

         }
           
          let resilt = ispalindrome("Wiw");
          console.log(resilt); */
           /* 
           let people = [
            {name:"alice",age:25},
            {name:"ali",age:30},
            {name:"bob",age:20}
           ];
             people.sort((a,b)=> a.age-b.age);
             console.log(people);
 */


              /* function chunkarray (arr,n) {
                const reslut =[];
                for (let i=0;i<arr.length;i=i+n) {
                  const chunk = arr.slice (i,i+n);
                  reslut.push(chunk);            
                    }
                    return reslut;
              }
             
              const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
              const chunkedArray = chunkarray(array, 3);
              console.log(chunkedArray); */
               
              /* let mystr = "HEllo world";
             let mystrr2= mystr.toUpperCase();
              console.log(mystrr2);
              console.log(mystr);
            let mystr3 =mystrr2.toLowerCase();
            console.log(mystr3);
            console.log(mystrr2);
           console.log(mystr.charAt(1))
           console.log(mystr.charAt(0))
           console.log(mystr.charAt(-1)) */
            
           /* let str = "hello  world";
           let mystr2= str.slice( 2,8);
           console.log(mystr2);
              let mystr3 = str.trim();
              console.log(mystr3);
              console.log(str);
              let replastr=str.replace("world", "javascript")
              console.log(str);
              console.log(replastr);
let myarray = str.split(" ");
console.log(myarray); */  
 /* let str = "hello world";
 console.log(str.split(" "));
  let str1="heelo";
  let str2 ="hi helo";
  let str3= str1.concat(" ",str2);
  console.log(" ",str3) */
     
  /* function reversestr (str) {
     let cleanstr = str.trim();
     let myarray=str.split("");
     let myreturnarray=myarray.reverse();
     let reversedstr=myreturnarray.join("");
     return reversedstr; */
  
    /* let stri="hello world in a full";
    let result=reversestr (stri) 
    console.log(result);
     let str = "HELLO";
     let str2 =str.toLowerCase();
     console.log(str);
     console.log(str2); */  

     /*  function countvowels (str) {
        const vowels = "aeiouAEIOU";
        let count=0;
         for (let char of str) {
          console.log(typeof char);
          if (vowels.includes(char)) {
            count++;
          }

         }
         return count ++;
      }
        
       let str ="Hellooohh"
       let result =  countvowels (str);
       console.log(result);  */
/* 
        function replaceall ( str ,substring ,replacestr) {
           return str.replace( substring ,replacestr);
        }
        console.log(replaceall("hello world","world","everybody")); */

        /* let string1="hello world,world!";
        let string2= string1.split("world").join("universe");
        console.log(string2);
        console.log(string1); */
          
          /* function areanagrams ( str1,str2) {
            const string1 = str1.split('').sort().join('');
            const string2 = str2.split('').sort().join('');
             return string1===string2;
          }
           console.log(areanagrams("live","evl")); */
        
              /* function findloghestword (str) {
               const words = str.split(' ');
              
               let logestword = "hi";

               for ( let word of words) {                
                if (word.length > logestword.length) {
                  logestword = word;
                }
               }
               return logestword;
             }
             let result =findloghestword("hello everbody how are you doing");
             console.log(result,"hi");  */


             /* function findLongestWord(str) {
              const words = str.split(' ');
              let longestWord = '';
          
              for (let word of words) {
                  if (word.length > longestWord.length) {
                      longestWord = word;
                  }
              }
          
              return longestWord;
          }
          
          // Example:
          console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
           */   
           
         /*  function countcharoccurances (str,char) {
            const words=str.split(' ')
            let count=0;
            for( let word of words) {
              if (char.includes(word)) {
                count++
              }
            }
            return count;
          }  

          let mystrin1="hello hello hello hello everybody";
   let result=countcharoccurances (mystrin1,"hello");
   console.log(result);
  */     
  /*  function checkoccurnces (str,char) {
    let count=0;
    for (let c of str) {
      console.log(c) 
      if(c===char) {
        count++;
      }
    }
    return count;
   }
   let mystrin1="hellollll";
   let result=checkoccurnces(mystrin1,"l");
   console.log(result); */  
    
   /* function istocamelcase (str) {
    return str.toLowerCase().split(' ').map( (word)=> word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
   }
   console.log(istocamelcase("hello hi everubody")); */
     /* function counts (str) {
       let reversed ='';
       for (let i=str.length-1;i>=0;i-=2) {
        reversed =reversed+str[i];
       }
       return reversed;
     }
        
     console.log(counts("helloji")); */

     /* const person={
      name :"shivaraj",
      age:22,
      job:"finding and will get a job soon"
     }
       console.log(person.name);
       person.town="ballari";
       console.log(person.town);
        delete person.age;
        console.log(person.age);
  console.log(person);
     const person1= {...person};
     console.log(person1);
     person1.town="toranagallu";
     console.log(person1);
     console.log(person); */

     /* let people ={
      name : "shiv",
      age :{
        x:24
     }} */
         
         
     /*  let deepcopy = JSON.parse(JSON.stringify(people));
      console.log(deepcopy);
      console.log(people);
      people.age.x=32;
      console.log(deepcopy);
      console.log(people); */
       /*  let person = {
          name : "shivaraj",
          age:25,
          job : "engineer"
        } */
         /*  
         for (let key in person) {
          console.log(`${key} : ${person[key]} `);
         }
 */
       /* for ( const key in person)  {
        console.log ( person[key]);
       } */  
       /* let car = {
        brand : "toyota",
        startengine : function () {
          console.log ("car engine stared");
        }
       }
       car.startengine();
       console.log(car.hasOwnProperty("brand")); */
        
       /* let peoples = [
          { name:"shiv",
            age :28
          },
          { name:"raj",
            age :26
          }
        ]
        peoples.sort ( (a,b)=> a.age-b.age);
        console.log(peoples); */

        let peoples = {
          name:"shiv",
            age :28 ,
            towm : "tornagallu"
          
        }
         /* let keys = Object.keys(peoples);
         let values = Object.values(peoples);
         console.log(keys);
         console.log(values); */
          /* let entries = Object.entries(peoples);
          console.log(entries);
          let entries1=entries.flat();
          console.log(entries1);
          console.log(entries);
         
           console.log(entries===entries1); */
            
            /* const obj ={ a:1, b:2};  */
             /*  for (const key in obj) {
                console.log (key ,obj[key]);
              } */
               /* for ( const key of Object.keys(obj)) {
                console.log (key,obj[key]);
               }   */
              /*  for ( const key of Object.values(obj)) {
                console.log (key);
               } */
              /*  let keys=Object.keys(obj);
               let valurs=Object.values(obj);
               console.log (keys);
              
               console.log (valurs); */

/* 
               for ( const key in Object.values(obj)) {
                console.log (obj[key]);
               } */
                 /* const myarr =[ 1,2,3,4,5,6,9];
                 for (const value in myarr) {
                  console.log(value);
                 } */
                  /* let values =Object.values(obj);
                  /* console.log(values) */
                    /* for ( i of values)  {
                      console.log(i);
                    } */  

                     const user = {
                      name : "raj",
                      age : 22
                     }
                    
                     const { name , age } = user;
                     console.log(name);
                     console.log(age);
                       let key = "fruit"
                        
                       let obj1 = {
                          [key] : "aapple"
                        }
                        console.log(obj1)
                    

                        