int indexFlex = A0; // analog input pin location of the flex sensor for the index finger
int indexPalm = A1;
int flexVal = 0;
int palmVal;
int red = 9; // pin location for 
int yellow = 10; // the LEDs
int green = 11;
int lightVal;

void setup() {
  Serial.begin(9600);
  pinMode(green, OUTPUT);
  pinMode(yellow, OUTPUT); 
}

void loop() {
  
  // read in flex sensor 
  flexVal = (flexVal + analogRead(indexFlex)) / 2; // moving average 
//  Serial.print("Flex Value: ");
 // Serial.println(flexVal);
  lightVal = map(flexVal, 775, 1023, 0, 255);
  analogWrite(red,lightVal);

  // read in finger placement
  palmVal = analogRead(indexPalm);
 // Serial.print(" | Palm Value: ");
//  Serial.println(palmVal);
  if(palmVal < 800) // open finger
  {
    digitalWrite(yellow, LOW);
    digitalWrite(green, LOW);
    Serial.print("0");
  }
  if(palmVal >= 800 && palmVal < 900) // cat paw
  {
    digitalWrite(yellow, HIGH);
    digitalWrite(green, LOW);
    Serial.print("2");
  }
  if(palmVal >= 900 )
  {
    digitalWrite(yellow, LOW);
    digitalWrite(green, HIGH);
    Serial.print("1");
  }
  Serial.print("-");
  delay(20);
}
