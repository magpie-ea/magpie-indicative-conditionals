// In this file you can specify the trial data for your experiment

const context_conditionals = [
      // DI Conditions
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> All students in class 6C have at least a B for their math test paper.
                  <br /><br />
				  <i>Conditional:</i><br /> If Ben is in class 6C, then he has at least a B for his math test paper.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> In the football competition, a won match yields three points.
                  <br /><br />
				  <i>Conditional:</i><br /> If Anderlecht is seven points ahead of Club Brugge, and there are only two 
                  matches to go in this year’s competition, then Club Brugge cannot become champion this year.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> All white cats possess a gene that predisposes them to develop blindness late in 
                  their lives.
                  <br /><br />
				  <i>Conditional:</i><br /> If Paul’s kitten is white, then it possesses
                  a gene that predisposes it to develop blindness late
                  in its life.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> Two friends are wondering whether Cynthia
                  passed the exam. They know that it was an absolute
                  requirement for the exam to hand in a thesis before
                  the end of the semester.
                  <br /><br />
				  <i>Conditional:</i><br /> If Cynthia did not hand in her thesis
                  before the end of the semester, she failed.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> It is generally known that the bank is
                  always open on Fridays, except when the employees
                  go on an outing. It’s Friday, and Kathy is on her way
                  to the bank. She thinks:
                  <br /><br />
				  <i>Conditional:</i><br /> If the bank is closed, then the employees
                  are on an outing.39`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> Every student that has less than a C for the
                  exam is required to retake the exam.
                  <br /><br />
				  <i>Conditional:</i><br /> If my classmate Joan has less than a C
                  for her exam, she is required to retake the exam.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> Students who belong to the top 10% of their
                  class each year will be able to write a good doctoral
                  thesis. Persons who are able to write a good doctoral
                  thesis are eligible for an externally funded PhD
                  position.
                  <br /><br />
				  <i>Conditional:</i><br /> If your fellow-student Stan belongs to
                  the top 10% of his class each year, he will be eligible
                  for an externally funded PhD position.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> Matt reads about a case of arson in the
                  newspaper. The police have a suspect in custody.
                  Arson is punished by imprisonment. He thinks:
                  <br /><br />
				  <i>Conditional:</i><br /> If the suspect is found guilty, he or she
                  will go to prison.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> Rational numbers are numbers that can be
                  written as a ratio of two natural numbers. Ellen
                  has written down a number on a slip of paper and
                  asks Carl to guess which number it is. Carl thinks:
                  <br /><br />
				  <i>Conditional:</i><br /> If Ellen has written down a rational
                  number, then the number on the slip of paper can
                  be written as a ratio of two natural numbers.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "DI",
            QUD: `<i>Context:</i><br /> Women who regularly exercise are at a 30%
                  decreased risk of developing osteoporosis.
                  <br /><br />
				  <i>Conditional:</i><br /> If Harriet regularly exercises, she is at a
                  decreased risk of developing osteoporosis.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },

      // II Conditions
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> According to a recent report written on the
                  authority of the Dutch government, many primary
                  school students in the province of Friesland (where
                  many people still mainly speak Frisian) have difficulty with spelling. Jitske is a student of a primary
                  school somewhere in the Netherlands.
                  <br /><br />
				  <i>Conditional:</i><br /> If Jitske goes to a Frisian primary school,
                  then she has difficulty with spelling.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> Most miners develop silicosis, a disease
                  caused by inhaling fine dust for a prolonged period
                  of one’s life.
                  <br /><br />
				  <i>Conditional:</i><br /> If Rudolph has worked in the mines for
                  all his life, then he has developed silicosis.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> A group of friends like to go shopping. Each
                  month they jointly visit some interesting shoe
                  shops. Most members of the group own at least 20
                  pairs of shoes.
                  <br /><br />
				  <i>Conditional:</i><br /> If Aline is a member of that group, she
                  has at least 20 pairs of shoes.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> Today is Saturday and you want to return a
                  book to the library. The library is hardly ever closed
                  on Saturdays. If it is, then that is mostly because
                  Luke, the librarian, is sick.
                  <br /><br />
				  <i>Conditional:</i><br /> If the library is closed today, then Luke
                  is sick.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> According to the local bus company, none of
                  their buses has been more than 5 min late in the past
                  2 years.
                  <br /><br />
				  <i>Conditional:</i><br /> If our bus is not exactly on time, it will
                  at most be a few minutes late.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> A pharmaceutical company unexpectedly
                  got into financial trouble. They had to cut many jobs
                  and decided to fire most employees above fifty.
                  Mark is an employee of this company.
                  <br /><br />
				  <i>Conditional:</i><br /> If Mark is above 50, he has been fired.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> The police received an anonymous tip that a
                  known terror group has planned an attack. They are
                  trying to determine when the attack might take
                  place. They know that large-scale attacks mostly
                  take place during morning rush hours.
                  <br /><br />
				  <i>Conditional:</i><br /> If the group wants to kill a great many
                  people, the attack will take place during morning
                  rush hours.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> You are employed at the incident room of a
                  company that guards all banks and other financial
                  institutions in the neighborhood. You were told that
                  false alarms are not rare, and that the local bank has
                  a particularly bad reputation in this respect: the
                  majority of their alarms are false. Suddenly there is
                  an alarm. You say to your colleague:
                  <br /><br />
				  <i>Conditional:</i><br /> If this alarm is from the local bank, it is
                  false.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> Dick is a bit of an irregular student: sometimes he works hard, but he can also be lazy. So far
                  he had excellent grades for most courses for which
                  he had worked hard.
                  <br /><br />
				  <i>Conditional:</i><br /> If Dick works hard for the linguistics
                  course, then he will get an excellent grade for it.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "II",
            QUD: `<i>Context:</i><br /> You know that today Jessica, the girl next door,
                  will hear whether she passed her finals. As far as you
                  know, Jessica has always been a serious student. Your
                  neighbors (her parents) are normally quiet people but
                  they like to celebrate joyful events in a somewhat noisy
                  fashion. For instance, when Jessica’s elder brothers and
                  sisters passed their finals, the stereo each time went on
                  maximal loudness. In the afternoon you suddenly hear
                  loud music. You cannot immediately determine from
                  which direction it is coming. But:
                  <br /><br />
				  <i>Conditional:</i><br /> If this music comes from the neighbors,
                  then Jessica has passed her finals.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },

      // AI Conditions
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> You strongly doubt that Hank will have passed the first-year examination. You suspect that his parents will buy him a car only if he passed that examination. You suddenly see Hank driving a new car.
                  <br /><br />
				  <i>Conditional:</i><br /> If the car Hank is driving is his, then he
                  passed the first-year examination.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> Nelly lives on the sixth floor of an apartment building. The elevator has been broken since
                  earlier this morning. A good friend of Nelly’s who
                  lives on the third floor of the same building hears
                  someone rushing down the stairs. She knows that
                  Nelly is not very sports-loving. She therefore thinks:
                  <br /><br />
				  <i>Conditional:</i><br /> If that’s Nelly rushing down the stairs,
                  then she is in a hurry.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> You know that Tom and Hank recently had
                  a flaming row which, you think, ended their friendship for good. Now a friend tells you that she thinks
                  she just saw Tom and Hank jogging together. She
                  may well be mistaken, but you think:
                  <br /><br />
				  <i>Conditional:</i><br /> If Tom and Hank are jogging together
                  again, they are friends again.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> Someone tells you that a nearby village has
                  been flooded. You doubt that this is true, but if it is,
                  then the most likely cause of the flooding is the
                  breaking of the dam.
                  <br /><br />
				  <i>Conditional:</i><br /> If the village has been flooded, the dam
                  is broken.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> Judy is waiting for the train. She is looking
                  for her iPod to listen to some music while she waits.
                  It is not in her coat. Yet she is sure that she took it
                  this morning. Perhaps it is in her bag. Then she sees
                  that the zipper of her bag is open. She cannot
                  remember that she opened it. At that moment there
                  is an announcement that pickpockets are active in
                  the train station.
                  <br /><br />
				  <i>Conditional:</i><br /> If Judy’s iPod is not in her bag, then
                  someone has stolen it.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> The police are investigating a homicide. The
                  body was found in a morass. The police have a prime
                  suspect. At the suspect’s home, they are looking for
                  his shoes. One of the detectives says:
                  <br /><br />
				  <i>Conditional:</i><br /> If we find muddy shoes, then he was at
                  the crime scene.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> Pete had to play the finals of a tennis tournament earlier today. Two friends of his, who do not
                  yet know the result of the match, are walking to
                  Pete’s house. From a distance, it seems to them that
                  there is a party going on in Pete’s garden. One of
                  them says:
                  <br /><br />
				  <i>Conditional:</i><br /> If Pete is partying, he has won the match.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> In an archive, letters have been found that
                  may have been written by Ludwig van Beethoven.
                  The author of these letters has put some symbols
                  in the margins whose meaning is unclear. According
                  to the historians studying the letters, the best explanation for the presence of these symbols is that the
                  author was a freemason.
                  <br /><br />
				  <i>Conditional:</i><br /> If these letters are van Beethoven’s
                  indeed, then he was a freemason.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> Mary invited archenemies Betty and Chris
                  to her party tonight. She does not expect Chris to
                  come; he does not seem to be very fond of parties.
                  On the other hand, she knows that Chris likes to irritate Betty.
                  <br /><br />
				  <i>Conditional:</i><br /> If Chris comes to the party, then he
                  wants to irritate Betty tonight.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        },
        {
            condition: "AI",
            QUD: `<i>Context:</i><br /> The government has taken measures
                  against the increasing pollution of the soil. It is not
                  certain that these will be effective. There is also a
                  chance that, through natural causes, soil pollution
                  will be halted. Yet experts agree that a decrease in
                  soil pollution in the coming years would be most
                  reasonably explained by the effectiveness of the
                  measures taken.
                  <br /><br />
				  <i>Conditional:</i><br /> If we shall witness a decrease in soil pollution in the next years, then the measures taken by
                  the government are effective.`,
            question: group_question,
            optionLeft: label_left,
            optionRight: label_right
        }
    ];

const eval_accept_data = [
    {
        question: `<strong>How did you interpret the notion of acceptability?</strong>`,
        min_chars: 3
    }
];
