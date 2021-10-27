
//basic p5.js template for posters
//this is a comment, the computer ignores these

//first we start with some variables
//these variables are ways in which we can contain data so we can use it later
//the first one contains the data for the video
//the second one contains the data for the Machine Learning Classifier
//the third one contains the data for the model with all the data
//(it looks different because it points at a local file in the computer/server)
let video;
let classifier;
let modelURL = './model/';

//this variable is used to contain text.
//the other ones beneath are the same
let label = "";

//I sort of liked having the text of Kafka's Metamorphosis 
//so I kept it here

// let introduction = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.";
// let text2 = "“What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table—Samsa was a travelling salesman—and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.";
// let text3 = "Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. “How about if I sleep a little bit longer and forget all this nonsense”, he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn’t get into that position. However hard he threw himself onto his right, he always rolled back to where he was. He must have tried it a hundred times, shut his eyes so that he wouldn’t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.";
// let text4 = "“Oh, God”, he thought, “what a strenuous career it is that I’ve chosen! Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there’s the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them. It can all go to Hell!”";
// let text5 = "He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so that he could lift his head better; found where the itch was, and saw that it was covered with lots of little white spots which he didn’t know what to make of; and when he tried to feel the place with one of his legs he drew it quickly back because as soon as he touched it he was overcome by a cold shudder.";
// let text6 = "He slid back into his former position. “Getting up early all the time”, he thought, “it makes you stupid. You’ve got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss; I’d get kicked out on the spot. ";
// let text7 = "But who knows, maybe that would be the best thing for me. If I didn’t have my parents to think about I’d have given in my notice a long time ago, I’d have gone up to the boss and told him just what I think, tell him everything I would, let him know just what I feel. He’d fall right off his desk! And it’s a funny sort of business to be sitting up there at your desk, talking down at your subordinates from up there, especially when you have to go right up close because the boss is hard of hearing. ";
// let text8 = "Well, there’s still some hope; once I’ve got the money together to pay off my parents’ debt to him—another five or six years I suppose—that’s definitely what I’ll do. That’s when I’ll make the big change. First of all though, I’ve got to get up, my train leaves at five.”";
// let text9 = "And he looked over at the alarm clock, ticking on the chest of drawers. “God in Heaven!” he thought. It was half past six and the hands were quietly moving forwards, it was even later than half past, more like quarter to seven. Had the alarm clock not rung? He could see from the bed that it had been set for four o’clock as it should have been; it certainly must have rung. Yes, but was it possible to quietly sleep through that furniture-rattling noise? ";
// let text10 = "True, he had not slept peacefully, but probably all the more deeply because of that. What should he do now? The next train went at seven; if he were to catch that he would have to rush like mad and the collection of samples was still not packed, and he did not at all feel particularly fresh and lively. And even if he did catch the train he would not avoid his boss’s anger as the office assistant would have been there to see the five o’clock train go, he would have put in his report about Gregor’s not being there a long time ago.";
// let conclusion = "The office assistant was the boss’s man, spineless, and with no understanding. What about if he reported sick? But that would be extremely strained and suspicious as in five years of service Gregor had never once yet been ill. His boss would certainly come round with the doctor from the medical insurance company, accuse his parents of having a lazy son, and accept the doctor’s recommendation not to make any claim as the doctor believed that no-one was ever ill but that many were workshy. And what’s more, would he have been entirely wrong in this case? Gregor did in fact, apart from excessive sleepiness after sleeping for so long, feel completely well and even felt much hungrier than usual.";

let introduction = "AI stands for “Artificial intelligence”. AI is a computer or machine’s ability to think and learn. The machine gets its intelligence by machine learning arranged by the developers behind the machine. With the machines intelligence it also gets opinions. But who gives the machines these opinions, and how can they decide that their opinions are the right ones?";
let text2 = "Ethics form a system of moral principles which govern the behaviour of an individual. They determine what is right and what is wrong, what is just and what is unjust in terms of human behaviour. Ethics are not objective; they change from person to person because they are influenced by different aspects of an individual’s life, such as religion, culture, parenting, acquaintances and so on. These biases are reflected in AI since they are programmed by humans, just like you or me. ";
let text3 = "Since AI can only work with the data it receives from a human, there is bound to bias caused by misrepresentation in the initial data. For example, if the initial data set of a facial recognition AI is predominantly white/Caucasian faces, it is going to have a hard time recognises the faces of other ethnicities. This is a very simple example, but it demonstrates how the data an AI receives has a huge effect on its bias. ";
let text4 = "Data classification is the process of tagging data and organising it into relevant categories so that an AI can make sense of it. For example, if there is an AI which is supposed to identify objects in the real world, the initial data (photos of real-life objects) needs to be tagged (photos of tables would be tagged ‘table’, photos of chairs would be tagged ‘chair’, and so on) so that the AI can proceed to identify new objects.";
let text5 = "However, as mentioned above, since the process of data classification is conducted by a human, with their own values and ethics, there is a source of bias. Different individuals would classify the same set of data differently, so their biases will be reflected in the AI. ";
let text6 = "Emotions play a fundamental role in the everyday life of humans as they are inevitable. They can influence decision making, perception and human interaction (Frederick, et al. 2020). Hence, when talking about emotions, it is important to understand the difference between them and feelings. “Feelings are the conscious experience of emotional reactions” (Farnsworth 2020), while emotions are unconscious responses. Psychologists have contrasting opinions on the existing number of emotions.";
let text7 = "Moreover, there is a problem of classification since humans experience different intensities of emotions and these are often related to others. In fact, one emotion cannot be isolated, making it hard to be labelled (Handel). ";
let text8 = "In order to be recognized by a machine, emotions can be expressed visually. Therefore, facial expressions must be labelled as emotions. Ekman argues that there are 6 universal emotions, meaning that their expression can be equally recognized among different cultures (Crawford 2021). His ideas have been widely used in AI as they simplify emotions to muscles movements that are detectable by computers. ";
let text9 = "In order to train an AI system in detecting emotions, these must be represented visually and labelled so that the computer can analyze the similarities between the inputs and classify them. For instance, a smile is associated with happiness, while a frown is associated with anger. ";
let text10 = "To train our AI and make the emotions recognizable, we had to take pictures, expressing different emotions caricatured. We made sure not to pick emotions that were too hard to tell apart such as guilt and sorrow. We also made sure that the facial expression was the only changing variable in the pictures. Else the compute would pick up on the wrong things. For example, if the background was black in the pictures of anger, but white in any other emotions, the computer would think that any other picture with a black background was angry.";
let conclusion = "How should we use AI? It could be used for what serves the most people regardless of the consequences, or it could be based on what our society finds most logic, tough it’s hard to define what's logical. It could be based on what is most fair for the involved/the user. In this workshop we tried to make our own AI to learn about bias in creation and how it translates to the product. In the end we tried to ask what AI should be used for, or if we should use it at all?";

let instructions = "To read the research, try to recreate an emotion using facial expressions, and press 'classify'. If you fail, click the buttons to read the texts. To read the Introduction and the Conclusion, click on their buttons";

//now I write the Graphic User Interface
//that is, the buttons that you see onscreen
//GUI
let gui;
let b;
let text1Button;
let text2Button;
let text3Button;
let text4Button;
let text5Button;
let text6Button;
let text7Button;
let text8Button;
let text9Button;
let text10Button;
let text11Button;


//this is a function
//which is a series of instructions the computer will run
//this function runs before you load the webpage
//I use it to load the Machine Learning model
//the emotions model you trained
// Loading the ML Model
function preload() 
{
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

//this function runs the instructions that setup the webpage as an interactive thing
// Doing the setup
function setup() 
{
  // first, I create a canvas in which I can draw things (like in painting)
  //the canvas is of the size of the browser window
  createCanvas(windowWidth, windowHeight);

  //these instructions tell the computer to draw the graphic user interface
  //the buttons and so on.
  //it uses what we know as a "library"
  //which is code written by somebody else to run specific instructions
  //in this case, I use a library to draw buttons on scene
  //it's like borrowing a book to make a citation
  //gui
  gui = createGui();
  gui.loadStyle("TerminalGreen");
  b = createButton("Classify", 275, 500, 100, 50);
  text1Button = createButton("Introduction", 100, height - 300, 125, 25);
  text2Button = createButton("1: Happiness", 250, height - 300, 125, 25);
  text3Button = createButton("2: Sadness", 400, height - 300, 125, 25);
  text4Button = createButton("3: Fear", 100, height - 250, 125, 25);
  text5Button = createButton("4: Disgust", 250, height - 250, 125, 25);
  text6Button = createButton("5: Anger", 400, height - 250, 125, 25);
  text7Button = createButton("6: Confusion", 100, height - 200, 125, 25);
  text8Button = createButton("7: Shock", 250, height - 200, 125, 25);
  text9Button = createButton("8: Calm", 400, height - 200, 125, 25);
  text10Button = createButton("9: Awe", 170, height - 150, 125, 25);
  text11Button = createButton("10: Conclusion", 325, height - 150, 150, 25);

  //these instructions create the video
  //and then hide it when the application loads
  //to preserve bandwidth and memory.
  //don't worry, you won't notice it.
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

}

//this function instructs the computer to read the images from the video
//and pass them through the machine learning model
//to see what it recognizes
function classifyVideo() 
{
  //this is calling a function
  //that is, telling a computer to run another set of instructions
  //the instructions are to classify, and what you want to classify is the video
  //and the results of the classification should be processed by a function called gotResults
  classifier.classify(video, gotResults);
}

//this function runs all the time (60 times per second on a modern computer)
//it contains a number of general instructions
function draw() 
{
  //this command draws the background of the screen in black
  background(0);

  //these instructions tell the computer how to align the text
  //that they should use gray colo
  //and that it should write a text box that contains the instructions text
  //at a particular position on screen
  textAlign(TOP, TOP);
  fill(100);
  text(instructions, video.width + 640 + (windowWidth/10), height - 40, 600, 300);

  //these functions draw the graphic user interface
  //and tell the computer how to draw squares
  drawGui();
  rectMode(CENTER);

  //this is a conditional instructions
  //if the button called b (which has the text "classify") is pressed
  //then it will run the function classifyVideo (line 120)
  //and will run another function called drawPoster (remember, functions are instructions)
  //if the button is not held, it will also draw the poster, but it will not change the text
  if(b.isHeld)
  {
    classifyVideo();
    drawPoster();
  }
  else
  {
    drawPoster();
  }

  //these conditional instructions make it so we can read the texts
  //even if we cannot generate the emotions
  if(text1Button.isPressed)
  {
    label = "Introduction";
    drawPoster();
  }

  if(text2Button.isPressed)
  {
    label = "The computer sees: Happiness"
    drawPoster();
  }

  if(text3Button.isPressed)
  {
    label = "The computer sees: Sadness"
    drawPoster();
  }

  if(text4Button.isPressed)
  {
    label = "The computer sees: Fear"
    drawPoster();
  }

  if(text5Button.isPressed)
  {
    label = "The computer sees: Disgust"
    drawPoster();
  }

  if(text6Button.isPressed)
  {
    label = "The computer sees: Anger"
    drawPoster();
  }

  if(text7Button.isPressed)
  {
    label = "The computer sees: Confusion"
    drawPoster();
  }

  if(text8Button.isPressed)
  {
    label = "The computer sees: Shock"
    drawPoster();
  }

  if(text9Button.isPressed)
  {
    label = "The computer sees: Calm"
    drawPoster();
  }

  if(text10Button.isPressed)
  {
    label = "The computer sees: Awe"
    drawPoster();
  }

  if(text11Button.isPressed)
  {
    label = "Conclusion"
    drawPoster();
  }
  
  // This command puts the video image on the screen
  image(video, 0, 0);

  // these instructions create a label under the video
  //where the emotion detected is displayed
  textSize(25);
  textAlign(CENTER, CENTER);
  fill(255);
  text("" + label, 330, video.height + 100);

  //this writes some results to the javascript console
  //so I can read what the computer can see
  //I used it for debugging, that is, reading what the computer was seeing while making this program
  console.log(label);
  
}

//these are the instructions the computer runs when it processes the video (see line 126)
function gotResults(error, results) 
{
  // a conditional instruction that says
  //if something breaks, tell me what it is
  //otherwise, write on screen what the computer sees
  //results[0].label is a weird way of telling the computer the following:
  //"of the list of emotions you've seen, send me the label that defines the first one you saw"
  if (error) 
  {
    console.error(error);
    return;
  }
  label = "The computer sees: " + results[0].label;
}

//these are the instructions to write the text on screen
//it's basically a very repetitive conditional instruction
//that writes different text on screen depending on what emotion is detected
function drawPoster()
{ 
  textSize(32);
  textAlign(TOP, TOP);
  textFont("Georgia");
  fill(255);

  switch (label)
  {
    case "Introduction":
      text(introduction, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Happiness":
      text(text2, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Sadness":
      text(text3, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Fear":
      text(text4, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Disgust":
      text(text5, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Anger":
      text(text6, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Confusion":
      text(text7, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Shock":
      text(text8, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Calm":
      text(text9, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "The computer sees: Awe":
      text(text10, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    case "Conclusion":
      text(conclusion, video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
    default:
      text("", video.width + 640 + (windowWidth/10), 390, 600, 600);
      break;
  }
}

//finally, these instructions change the size of the canvas where we draw
//if we change the size of the browser window
function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}