class ResistorColorDuo {
 List<String> colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  int value(List<String> BandColors){
    return colors.indexOf(BandColors[0]) * 10 + colors.indexOf(BandColors[1]);
  }
}
