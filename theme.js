module.exports = function(
  mandelbrot, {
    nav = [ 'search', 'docs', 'components'],
    panels = ['notes', 'html', 'resources'],
    styles = [
      'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap',
      'default',
      '/_theme/hydrogen.css',
    ],
    ...otherOptions
  } = {}
) {
  const subTheme = mandelbrot({ nav, panels, styles, ...otherOptions })
  subTheme.addStatic(__dirname + '/dist', '/_theme');
  return subTheme
}
