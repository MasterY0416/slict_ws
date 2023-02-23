#version 120

// Draws a circle in the fragment color, multiplying a with the alpha param

uniform vec4 highlight;
uniform float alpha;

// Rasterizes a circle of radius 0.5
void circleImpl(vec4 color, float ax, float ay)
{
  float rsquared = ax * ax + ay * ay;
  float a = (0.25 - rsquared) * 4.0;
  gl_FragColor = vec4(color.rgb, color.a * ceil(a));
}

void main()
{
  vec3 col = gl_Color.xyz + gl_Color.xyz * highlight.xyz;
  circleImpl(vec4(col, alpha * gl_Color.a), gl_TexCoord[0].x - 0.5, gl_TexCoord[0].y - 0.5);
}
