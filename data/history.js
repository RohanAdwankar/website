// order events new to old
const history = [
  {
    title: 'ACM Design becomes a new committee',
    date: 'January 2019',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'ACM Teach LA becomes a new committee',
    date: 'September 2018',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'ACM CTF Launched',
    date: 'May 2017',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'Bruin Game Studio merges with ACM to become ACM Game Studio',
    date: 'March 2017',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'DevX spins off of ACM',
    date: 'March 2017',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'ACM ICPC qualifies for ICPC World Finals',
    date: 'March 2017',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'ACM Teach LA launched as a board initiative',
    date: 'January 2017',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'Hack School Launched',
    date: 'October 2016',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'ACM at UCLA restructured into 5 committees: Hack, AI, ICPC, ACM-W, and VRCG',
    date: 'May 2016',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'UCLA\'s founder school launched with UPE',
    date: 'May 2016',
    description: 'Consequat id porta nibh venenatis cras. Elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquet eget sit amet tellus cras. Eget magna fermentum iaculis eu non diam. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Volutpat lacus laoreet non curabitur gravida arcu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet justo donec enim diam vulputate ut pharetra sit. Consectetur adipiscing elit pellentesque habitant morbi. Odio tempor orci dapibus ultrices. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nibh cras pulvinar mattis nunc sed blandit libero. Integer eget aliquet nibh praesent tristique magna sit amet purus. Id volutpat lacus laoreet non curabitur gravida arcu. Libero justo laoreet sit amet cursus sit amet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.',
  },
  {
    title: 'Hacker Expo (now Tech Gala) founded',
    date: 'November 2015',
    description: 'Id venenatis a condimentum vitae. Volutpat odio facilisis mauris sit amet. Faucibus scelerisque eleifend donec pretium. Justo donec enim diam vulputate ut. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Turpis in eu mi bibendum neque egestas. Faucibus ornare suspendisse sed nisi. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Nisl suscipit adipiscing bibendum est ultricies integer quis. Sit amet risus nullam eget felis eget.',
  },
  {
    title: 'ACM-W Officially Chartered',
    date: 'December 11, 2014',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default history;
